import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './photoAlert.css'

const sweetAlert = Swal.mixin({
    width: "85rem",
    customClass: {
        image: 'custom-swal2-image',
        closeButton: 'custom-swal2-close',
    }
});
export const PhotoAlert = withReactContent(sweetAlert);
