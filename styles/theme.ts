const theme = {
    colors: {
        base: '#000',
        sub: '#111',
        gray: '#343434',
        text: '#fff',
        subText: '#BDC3C9',
        accent: '#CAA846'
    },
    fontFamily: 'serif',
    fontSizes: {
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '40px',
        xxl: '60px',
        xxxl: '80px',
    }
}

export type Theme = typeof theme;

export default theme;