import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const sweetAlert = Swal.mixin({
    width: "75rem",
});
export const PhotoAlert = withReactContent(sweetAlert);