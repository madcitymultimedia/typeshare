export interface GenericStruct<A, B> {
	field_a: A;
	field_b: B[];
}

export interface GenericStructUsingGenericStruct<T> {
	struct_field: GenericStruct<string, T>;
	second_struct_field: GenericStruct<T, string>;
	third_struct_field: GenericStruct<T, T[]>;
}

export type EnumUsingGenericStruct = 
	| { type: "VariantA", content: GenericStruct<string, number> }
	| { type: "VariantB", content: GenericStruct<string, number> }
	| { type: "VariantC", content: GenericStruct<string, boolean> }
	| { type: "VariantD", content: GenericStructUsingGenericStruct<null> };

