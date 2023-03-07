export function setMouseCursorLeave(props: HTMLElement) {
    if (props.classList.contains('hover')) {
        props.addEventListener('mouseleave', (e: MouseEvent) => {
            const { target } = e;
            (target as HTMLElement).classList.remove('hover');
        });
    }
}
