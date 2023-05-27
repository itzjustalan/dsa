// n.innerText = (level === 'info' ? '' : (level + ': ')) + text;

const levelled_echo = (level, ...v) => {
    const output = document.getElementById('output');
    const br = document.createElement('br');
    const n = document.createElement('span');
    // n.innerText = v.toString();
    n.innerText = ((level) => {
        switch (level) {
            case 'error':
                return 'error: ';
            case 'warn':
                return 'warning: ';
            // case 'info':
            //     return 'info: ';
            default:
                return '';
        }
    })(level) + v.join(' ');
    const style = ((level) => {
        switch (level) {
            case 'error':
                return { color: 'red' }
            case 'warn':
                return { color: 'yellow' }
            case 'info':
                return { color: '#62a7d0' }
            default:
                return { color: level }
        }
    })(level);
    n.style.color = style.color;
    output.prepend(br);
    output.prepend(n);
}

const echo = {
    info: (...v) => levelled_echo('info', ...v),
    warn: (...v) => levelled_echo('warn', ...v),
    warning: (...v) => levelled_echo('warn', ...v),
    err: (...v) => levelled_echo('error', ...v),
    error: (...v) => levelled_echo('error', ...v),
    color: (color, ...v) => levelled_echo(color, ...v),
};

const reset_output = () => {
    const output = document.getElementById('output');
    output.innerHTML = 'output: [<a href="#" onclick="event.preventDefault();reset_output()">clear</a>]';
}
