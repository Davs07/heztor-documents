import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {};

function ConfigurationModal({}: Props) {
  return (
    <DialogHeader>
      <DialogTitle>Mi perfil</DialogTitle>
      <DialogDescription>Aquí puedes ver tu perfil.</DialogDescription>
    </DialogHeader>
  );
}

export default ConfigurationModal;
