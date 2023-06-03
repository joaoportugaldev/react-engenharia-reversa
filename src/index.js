function convertToHtml(virtualNode) {
    const $domElement = document.createElement(virtualNode.tagName)
    
        if (typeof virtualNode === 'string' || typeof virtualNode === 'number') {
        return document.createTextNode(`${virtualNode}`)
        }
    
        virtualNode.props.children.forEach(virtualChild => {
            $domElement.appendChild(convertToHtml(virtualChild))
        });
    
        return $domElement
    }
    
    function render(initialVirtualTree, $domRoot) {
        const $appHTML = convertToHtml(initialVirtualTree);
        
        $domRoot.appendChild($appHTML)
    }
    
    function createElement(elementType, props, ...children) {
        const virtualElementProps = {
        ...props,
        children
        }
        if(typeof elementType === "function") {
        return elementType(virtualElementProps)
        }
    
        return {
        tagName: elementType,
        props: virtualElementProps
        }
    }
    
    const React = {
        createElement
    }
    
    //========================================
    
    function MeuComponente() {
        return (
        React.createElement("button", null, "Clique no componente")
        )
    }
    
    //========================================
    
    function App() {
        return (
        React.createElement(
            "section", 
            {
            className: "App",
            tamanho: 'full'
            },
        React.createElement("h1", {className: 'classe-do-h1'}, "React com Reverse Engineering"),
        React.createElement("p", {className: 'classe-do-p'}, "Esse é meu react simplificado"),
        React.createElement(MeuComponente, null)
        )
        )
    }
    
    render(React.createElement(App, {className: 'appClass'}), document.getElementById('root'))