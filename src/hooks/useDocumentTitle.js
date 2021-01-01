import { useEffect } from "react";

function useDocumentTitle(counter) {
    useEffect(() => {
        document.title = `Counter ${counter}`;
    }, [counter]);
}

export default useDocumentTitle;
