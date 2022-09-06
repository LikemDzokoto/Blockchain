import sha256 from 'js-sha256';
//js-sha256

declare module 'js-sha256'{
    function sha256(data: string) : string;
    export default sha256;
}