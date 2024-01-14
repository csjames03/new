export type DataType = {
    address: string;
    age: number;
    contact: string;
    firstName: string;
    lastName: string;
    middleName: string;
    medicalStatus: string;
    sex: string;
  };
  
  export const CreateDonorBodyValidator = (data: DataType, fields: (keyof DataType)[]): { message: string }[] | undefined => {
    let errors: { message: string }[] = [];
  
    for (const field of fields) {
      const value = data[field];
  
      if (value === "" || value === undefined) {
        errors.push({ message: `${field} must contain a value` });
      }

      if (field === "age" && (typeof value !== "number" || value <= 0)) {
        errors.push({ message: `${field} must be a positive number` });
      }
    }
  
    if (errors.length > 0) {
      return errors;
    }
  
    return undefined;
  };
  