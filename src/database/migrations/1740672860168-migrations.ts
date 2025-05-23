import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1740672860168 implements MigrationInterface {
    name = 'Migrations1740672860168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "coupons" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "code" character varying NOT NULL, "description" text NOT NULL, "discount_amount" numeric, "discount_percentage" numeric, "max_usage" integer, "used_count" integer NOT NULL DEFAULT '0', "start_date" TIMESTAMP, "end_date" TIMESTAMP, "status" integer NOT NULL DEFAULT '1', "meta" jsonb, CONSTRAINT "PK_d7ea8864a0150183770f3e9a8cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "discounts" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "code" character varying NOT NULL, "description" text NOT NULL, "discount_percentage" numeric NOT NULL, "start_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP NOT NULL, "status" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_66c522004212dc814d6e2f14ecc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "email" character varying NOT NULL, "phone_number" character varying NOT NULL, "role_id" integer NOT NULL, "status" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "inventory" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "product_id" integer NOT NULL, "quantity" integer NOT NULL, "adjustment_type" character varying NOT NULL, "meta" jsonb, CONSTRAINT "PK_82aa5da437c5bbfb80703b08309" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "loyalty_points" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "member_id" integer NOT NULL, "points" integer NOT NULL, "lifetime_points" integer NOT NULL, CONSTRAINT "PK_5b4966b4ed649d2075b74cc7d10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "loyalty_transactions" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "member_id" integer NOT NULL, "order_id" integer NOT NULL, "points_earned" integer NOT NULL, "points_spent" integer NOT NULL, "transaction_type" character varying NOT NULL, CONSTRAINT "PK_df453f678b7575221b335673362" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "members" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "avatar" integer, "email" character varying NOT NULL, "phone_number" character varying, "gender" integer, "day_of_birth" TIMESTAMP, "token" character varying, "name" character varying NOT NULL, "password" character varying NOT NULL, "status" integer NOT NULL DEFAULT '1', "first_login" jsonb, "meta" jsonb, CONSTRAINT "UQ_2714af51e3f7dd42cf66eeb08d6" UNIQUE ("email"), CONSTRAINT "PK_28b53062261b996d9c99fa12404" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "media_files" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "member_id" integer NOT NULL, "file_path" text NOT NULL, "status" integer NOT NULL, "type" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_93b4da6741cd150e76f9ac035d8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "member_id" integer NOT NULL, "total_amount" numeric NOT NULL, "status" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_items" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "order_id" integer NOT NULL, "product_id" integer NOT NULL, "quantity" integer NOT NULL, "price" numeric NOT NULL, "meta" jsonb, CONSTRAINT "PK_005269d8574e6fac0493715c308" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "otps" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "phone_number" character varying NOT NULL, "code" character varying NOT NULL, "token" jsonb, "status" integer NOT NULL, "type" integer NOT NULL, "ip" character varying, "meta" jsonb, CONSTRAINT "PK_91fef5ed60605b854a2115d2410" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payments" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "order_id" integer NOT NULL, "payment_method" character varying NOT NULL, "amount" numeric NOT NULL, "status" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_197ab7af18c93fbb0c9b28b4a59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" text NOT NULL, "price" numeric NOT NULL, "sku" character varying NOT NULL, "stock_quantity" integer NOT NULL, "status" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_attributes" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "status" integer NOT NULL, CONSTRAINT "PK_4fa18fc5c893cb9894fc40ca921" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_attribute_values" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "product_id" integer NOT NULL, "attribute_id" integer NOT NULL, "value" text NOT NULL, CONSTRAINT "PK_b124baf1272037deac1c21cffe1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_categories" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "parent_id" integer, "name" character varying NOT NULL, "description" character varying, "status" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_7069dac60d88408eca56fdc9e0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_category_mapping" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "product_id" integer NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_a79406e7abd613093e7d90f2f77" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_tags" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "product_id" integer NOT NULL, "tag_id" integer NOT NULL, CONSTRAINT "PK_e96bca3cd7a592009f2c9dc6f3e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_taxes" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "product_id" integer NOT NULL, "tax_id" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_a890c143156cb381a1177c25d28" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_variants" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "product_id" integer NOT NULL, "sku" character varying NOT NULL, "price" numeric NOT NULL, "stock_quantity" integer NOT NULL, "status" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_281e3f2c55652d6a22c0aa59fd7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchase_orders" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "supplier_id" integer NOT NULL, "total_amount" numeric NOT NULL, "status" integer NOT NULL, "created_by" integer NOT NULL, "meta" jsonb, "created_by_id" integer, CONSTRAINT "PK_05148947415204a897e8beb2553" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchase_order_items" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "purchase_order_id" integer NOT NULL, "product_id" integer NOT NULL, "quantity" integer NOT NULL, "unit_price" numeric NOT NULL, CONSTRAINT "PK_e8b7568d25c41e3290db596b312" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rbac_actions" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "key" character varying NOT NULL, "rbac_module_id" integer NOT NULL, "status" integer NOT NULL, "description" text NOT NULL, "meta" jsonb, CONSTRAINT "PK_190032a075ab676476d2f6749e7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rbac_modules" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "key" character varying NOT NULL, "description" text, "meta" jsonb, CONSTRAINT "PK_e1554f2ac07918ebed171d8ed94" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "returns" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "order_id" integer NOT NULL, "member_id" integer NOT NULL, "return_reason" text NOT NULL, "status" integer NOT NULL, "refund_amount" numeric NOT NULL, "processed_by" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_27a2f1895a71519ebfec7850361" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "return_items" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "return_id" integer NOT NULL, "order_item_id" integer NOT NULL, "quantity" integer NOT NULL, "reason" text NOT NULL, CONSTRAINT "PK_6e6c1db00d31ab59c1bc22f6cb9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "status" integer NOT NULL, "description" character varying, "meta" jsonb, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role_actions" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "rbac_action_id" integer NOT NULL, "role_id" integer NOT NULL, "status" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_5ee58f1e3c6236c691f190e0781" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shifts" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "employee_id" integer NOT NULL, "start_time" TIMESTAMP NOT NULL, "end_time" TIMESTAMP NOT NULL, "meta" jsonb, CONSTRAINT "PK_84d692e367e4d6cdf045828768c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "suppliers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "contact_person" character varying, "email" character varying, "phone" character varying, "address" text, "status" integer NOT NULL DEFAULT '1', "meta" jsonb, CONSTRAINT "PK_b70ac51766a9e3144f778cfe81e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "status" integer NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "taxes" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "rate" numeric NOT NULL, "description" text NOT NULL, "status" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_6c58c9cbb420c4f65e3f5eb8162" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "third_party_logs" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "type" integer NOT NULL, "status" integer NOT NULL, "member_id" integer NOT NULL, "meta" jsonb, CONSTRAINT "PK_987c52cbaf49bcda958e60934bb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "variant_attributes" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "variant_id" integer NOT NULL, "attribute_id" integer NOT NULL, "value" text NOT NULL, CONSTRAINT "PK_9ea2c908cbc17394e49ff64779a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "avatar" integer, "email" character varying NOT NULL, "phone_number" character varying, "gender" integer, "day_of_birth" TIMESTAMP, "token" character varying, "name" character varying NOT NULL, "password" character varying NOT NULL, "status" integer NOT NULL DEFAULT '1', "id_role" integer, "firebase_token" character varying, "first_login" jsonb, "meta" jsonb, "role_id" integer, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_727d9c30d77d3a253177b2e918f" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inventory" ADD CONSTRAINT "FK_732fdb1f76432d65d2c136340dc" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loyalty_points" ADD CONSTRAINT "FK_73fd5a56e9441bdf825bfc89dc2" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loyalty_transactions" ADD CONSTRAINT "FK_9d859a70431c6ead8760588156f" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "loyalty_transactions" ADD CONSTRAINT "FK_8be4d5110bff05094d246d62aed" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "media_files" ADD CONSTRAINT "FK_757047a0d19d7409dc191f8165f" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_cec51276d127c44da30cd333a73" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_items" ADD CONSTRAINT "FK_145532db85752b29c57d2b7b1f1" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_items" ADD CONSTRAINT "FK_9263386c35b6b242540f9493b00" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "payments" ADD CONSTRAINT "FK_b2f7b823a21562eeca20e72b006" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_attribute_values" ADD CONSTRAINT "FK_61655fe2f6d179eced519392ced" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_attribute_values" ADD CONSTRAINT "FK_f1f04534a41f575a6def0710063" FOREIGN KEY ("attribute_id") REFERENCES "product_attributes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_category_mapping" ADD CONSTRAINT "FK_6f178c3be5110b91f996d3bd513" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_category_mapping" ADD CONSTRAINT "FK_e080a3aa6317e2a610b3209f99c" FOREIGN KEY ("category_id") REFERENCES "product_categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_tags" ADD CONSTRAINT "FK_5b0c6fc53c574299ecc7f9ee22e" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_tags" ADD CONSTRAINT "FK_f2cd3faf2e129a4c69c05a291e8" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_taxes" ADD CONSTRAINT "FK_1d39e319e41b1edce44933cfe75" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_taxes" ADD CONSTRAINT "FK_db8c22b3e1e26adae58c92dc64e" FOREIGN KEY ("tax_id") REFERENCES "taxes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_variants" ADD CONSTRAINT "FK_6343513e20e2deab45edfce1316" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_orders" ADD CONSTRAINT "FK_d16a885aa88447ccfd010e739b0" FOREIGN KEY ("supplier_id") REFERENCES "suppliers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_orders" ADD CONSTRAINT "FK_1fdd0d65d22a9a9b3d43d7392d1" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_order_items" ADD CONSTRAINT "FK_3f92bb44026cedfe235c8b91244" FOREIGN KEY ("purchase_order_id") REFERENCES "purchase_orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchase_order_items" ADD CONSTRAINT "FK_d5089517fc19b1b9fb04454740c" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rbac_actions" ADD CONSTRAINT "FK_e537acdfba02d247a1a31e36537" FOREIGN KEY ("rbac_module_id") REFERENCES "rbac_modules"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "returns" ADD CONSTRAINT "FK_7c0b171a97595625487728ddb3e" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "returns" ADD CONSTRAINT "FK_16539a714eb728b938f2fc91f11" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "return_items" ADD CONSTRAINT "FK_afc80619fe38ae5911b464af463" FOREIGN KEY ("return_id") REFERENCES "returns"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "return_items" ADD CONSTRAINT "FK_c57d201363c110de07d1fd32027" FOREIGN KEY ("order_item_id") REFERENCES "order_items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_actions" ADD CONSTRAINT "FK_fb54e81a43ee66fca8e832b5443" FOREIGN KEY ("rbac_action_id") REFERENCES "rbac_actions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "role_actions" ADD CONSTRAINT "FK_2ed4344d4ad234b70b11e3014ed" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shifts" ADD CONSTRAINT "FK_47935d717a7c66cb9e8ac08df82" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "third_party_logs" ADD CONSTRAINT "FK_9916612c7aad8f3dc4ba6ae43a5" FOREIGN KEY ("member_id") REFERENCES "members"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "variant_attributes" ADD CONSTRAINT "FK_757018150aaa6a2312e4abf2b05" FOREIGN KEY ("variant_id") REFERENCES "product_variants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "variant_attributes" ADD CONSTRAINT "FK_231a001a16a6b084342bcf5ee7d" FOREIGN KEY ("attribute_id") REFERENCES "product_attributes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1"`);
        await queryRunner.query(`ALTER TABLE "variant_attributes" DROP CONSTRAINT "FK_231a001a16a6b084342bcf5ee7d"`);
        await queryRunner.query(`ALTER TABLE "variant_attributes" DROP CONSTRAINT "FK_757018150aaa6a2312e4abf2b05"`);
        await queryRunner.query(`ALTER TABLE "third_party_logs" DROP CONSTRAINT "FK_9916612c7aad8f3dc4ba6ae43a5"`);
        await queryRunner.query(`ALTER TABLE "shifts" DROP CONSTRAINT "FK_47935d717a7c66cb9e8ac08df82"`);
        await queryRunner.query(`ALTER TABLE "role_actions" DROP CONSTRAINT "FK_2ed4344d4ad234b70b11e3014ed"`);
        await queryRunner.query(`ALTER TABLE "role_actions" DROP CONSTRAINT "FK_fb54e81a43ee66fca8e832b5443"`);
        await queryRunner.query(`ALTER TABLE "return_items" DROP CONSTRAINT "FK_c57d201363c110de07d1fd32027"`);
        await queryRunner.query(`ALTER TABLE "return_items" DROP CONSTRAINT "FK_afc80619fe38ae5911b464af463"`);
        await queryRunner.query(`ALTER TABLE "returns" DROP CONSTRAINT "FK_16539a714eb728b938f2fc91f11"`);
        await queryRunner.query(`ALTER TABLE "returns" DROP CONSTRAINT "FK_7c0b171a97595625487728ddb3e"`);
        await queryRunner.query(`ALTER TABLE "rbac_actions" DROP CONSTRAINT "FK_e537acdfba02d247a1a31e36537"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_items" DROP CONSTRAINT "FK_d5089517fc19b1b9fb04454740c"`);
        await queryRunner.query(`ALTER TABLE "purchase_order_items" DROP CONSTRAINT "FK_3f92bb44026cedfe235c8b91244"`);
        await queryRunner.query(`ALTER TABLE "purchase_orders" DROP CONSTRAINT "FK_1fdd0d65d22a9a9b3d43d7392d1"`);
        await queryRunner.query(`ALTER TABLE "purchase_orders" DROP CONSTRAINT "FK_d16a885aa88447ccfd010e739b0"`);
        await queryRunner.query(`ALTER TABLE "product_variants" DROP CONSTRAINT "FK_6343513e20e2deab45edfce1316"`);
        await queryRunner.query(`ALTER TABLE "product_taxes" DROP CONSTRAINT "FK_db8c22b3e1e26adae58c92dc64e"`);
        await queryRunner.query(`ALTER TABLE "product_taxes" DROP CONSTRAINT "FK_1d39e319e41b1edce44933cfe75"`);
        await queryRunner.query(`ALTER TABLE "product_tags" DROP CONSTRAINT "FK_f2cd3faf2e129a4c69c05a291e8"`);
        await queryRunner.query(`ALTER TABLE "product_tags" DROP CONSTRAINT "FK_5b0c6fc53c574299ecc7f9ee22e"`);
        await queryRunner.query(`ALTER TABLE "product_category_mapping" DROP CONSTRAINT "FK_e080a3aa6317e2a610b3209f99c"`);
        await queryRunner.query(`ALTER TABLE "product_category_mapping" DROP CONSTRAINT "FK_6f178c3be5110b91f996d3bd513"`);
        await queryRunner.query(`ALTER TABLE "product_attribute_values" DROP CONSTRAINT "FK_f1f04534a41f575a6def0710063"`);
        await queryRunner.query(`ALTER TABLE "product_attribute_values" DROP CONSTRAINT "FK_61655fe2f6d179eced519392ced"`);
        await queryRunner.query(`ALTER TABLE "payments" DROP CONSTRAINT "FK_b2f7b823a21562eeca20e72b006"`);
        await queryRunner.query(`ALTER TABLE "order_items" DROP CONSTRAINT "FK_9263386c35b6b242540f9493b00"`);
        await queryRunner.query(`ALTER TABLE "order_items" DROP CONSTRAINT "FK_145532db85752b29c57d2b7b1f1"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_cec51276d127c44da30cd333a73"`);
        await queryRunner.query(`ALTER TABLE "media_files" DROP CONSTRAINT "FK_757047a0d19d7409dc191f8165f"`);
        await queryRunner.query(`ALTER TABLE "loyalty_transactions" DROP CONSTRAINT "FK_8be4d5110bff05094d246d62aed"`);
        await queryRunner.query(`ALTER TABLE "loyalty_transactions" DROP CONSTRAINT "FK_9d859a70431c6ead8760588156f"`);
        await queryRunner.query(`ALTER TABLE "loyalty_points" DROP CONSTRAINT "FK_73fd5a56e9441bdf825bfc89dc2"`);
        await queryRunner.query(`ALTER TABLE "inventory" DROP CONSTRAINT "FK_732fdb1f76432d65d2c136340dc"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_727d9c30d77d3a253177b2e918f"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "variant_attributes"`);
        await queryRunner.query(`DROP TABLE "third_party_logs"`);
        await queryRunner.query(`DROP TABLE "taxes"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`DROP TABLE "suppliers"`);
        await queryRunner.query(`DROP TABLE "shifts"`);
        await queryRunner.query(`DROP TABLE "role_actions"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "return_items"`);
        await queryRunner.query(`DROP TABLE "returns"`);
        await queryRunner.query(`DROP TABLE "rbac_modules"`);
        await queryRunner.query(`DROP TABLE "rbac_actions"`);
        await queryRunner.query(`DROP TABLE "purchase_order_items"`);
        await queryRunner.query(`DROP TABLE "purchase_orders"`);
        await queryRunner.query(`DROP TABLE "product_variants"`);
        await queryRunner.query(`DROP TABLE "product_taxes"`);
        await queryRunner.query(`DROP TABLE "product_tags"`);
        await queryRunner.query(`DROP TABLE "product_category_mapping"`);
        await queryRunner.query(`DROP TABLE "product_categories"`);
        await queryRunner.query(`DROP TABLE "product_attribute_values"`);
        await queryRunner.query(`DROP TABLE "product_attributes"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "payments"`);
        await queryRunner.query(`DROP TABLE "otps"`);
        await queryRunner.query(`DROP TABLE "order_items"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "media_files"`);
        await queryRunner.query(`DROP TABLE "members"`);
        await queryRunner.query(`DROP TABLE "loyalty_transactions"`);
        await queryRunner.query(`DROP TABLE "loyalty_points"`);
        await queryRunner.query(`DROP TABLE "inventory"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "discounts"`);
        await queryRunner.query(`DROP TABLE "coupons"`);
    }

}
