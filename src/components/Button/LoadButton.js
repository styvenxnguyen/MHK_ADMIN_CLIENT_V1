import { Button } from 'react-bootstrap';

export const Loader = () => {
  return (
    <span>
      <i className="spinner-border spinner-border-sm mr-1" role="status"></i>Đang xử lý...
    </span>
  );
};

export const ButtonLoading = ({ onSubmit, text, loading, disabled, style }) => {
  return (
    <Button onClick={onSubmit} disabled={disabled} style={style}>
      {!loading ? text : <Loader />}
    </Button>
  );
};
