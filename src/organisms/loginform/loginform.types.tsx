import { LoginFormFieldsProps } from "@/molecules/loginformfields/loginformfields.types";
import { LoginFormActionsProps } from "@/molecules/loginformactions/loginformactions.types";

export interface LoginFormProps {
  formFields: LoginFormFieldsProps;
  formActions: LoginFormActionsProps;
}
