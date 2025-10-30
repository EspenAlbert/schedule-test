# 1/provider/TestAccSTSAssumeRole_basic Test Details
# Found 119 TestRuns in dev, qa from 2025-09-30 to 2025-10-30 from master branch: 1 unique tests, PASS(x 93) SKIP(x 21) FAIL(x 5)
Success rate: 94.90%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-30 15:06](#error-2025-09-30t1506220000) |  | qa |  | 0.07s
[2025-09-30 15:06](#error-2025-09-30t1506310000) |  | qa |  | 1.00s
[2025-10-05 00:29](#error-2025-10-05t0029340000) |  | qa |  | 1.00s
[2025-10-05 00:29](#error-2025-10-05t0029590000) |  | qa |  | 0.08s
[2025-10-09 00:27](#error-2025-10-09t0027090000) |  | dev | flaky_client | 5.07s

## Timeline
- 2025-09-30
  - FAIL a moment

### Error 2025-09-30T15:06:22+00:00
```
2025-09-30T15:06:22.7071567Z === RUN   TestAccSTSAssumeRole_basic
2025-09-30T15:06:22.7072313Z === CONT  TestAccSTSAssumeRole_basic
2025-09-30T15:06:23.3613432Z 2025/09/30 15:06:23 AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759244782915103201 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-09-30T15:06:23.3616786Z 	status code: 400, request id: d50efbae-208d-4714-9365-51d880fbfad1
2025-09-30T15:06:23.3619583Z 2025/09/30 15:06:23 Get Secrets error: AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759244782915103201 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-09-30T15:06:23.3622054Z 	status code: 400, request id: d50efbae-208d-4714-9365-51d880fbfad1
2025-09-30T15:06:23.3625013Z   diagnostic_summary=
2025-09-30T15:06:23.3628892Z   
2025-09-30T15:06:23.3728523Z    test_terraform_path=/home/runner/work/_temp/5824ca24-e105-445f-ab49-e7e174f660f6/terraform
2025-09-30T15:06:23.3729792Z     provider_authentication_test.go:18: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-09-30T15:06:23.3730626Z         
2025-09-30T15:06:23.3731185Z         Error: Invalid provider configuration
2025-09-30T15:06:23.3731690Z         
2025-09-30T15:06:23.3732608Z         Provider "registry.terraform.io/hashicorp/mongodbatlas" requires explicit
2025-09-30T15:06:23.3734063Z         configuration. Add a provider block to the root module and configure the
2025-09-30T15:06:23.3735265Z         provider's required arguments as described in the provider documentation.
2025-09-30T15:06:23.3735960Z         
2025-09-30T15:06:23.3740318Z         Error: AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759244782915103201 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-09-30T15:06:23.3743344Z         	status code: 400, request id: d50efbae-208d-4714-9365-51d880fbfad1
2025-09-30T15:06:23.3748165Z         
2025-09-30T15:06:23.3749003Z           with provider["registry.terraform.io/hashicorp/mongodbatlas"],
2025-09-30T15:06:23.3749746Z           on <empty> line 0:
2025-09-30T15:06:23.3750253Z           (source code not available)
2025-09-30T15:06:23.3750557Z         
2025-09-30T15:06:23.3926199Z --- FAIL: TestAccSTSAssumeRole_basic (0.69s)
```

  - FAIL a second

### Error 2025-09-30T15:06:31+00:00
```
2025-09-30T15:06:31.8446186Z === RUN   TestAccSTSAssumeRole_basic
2025-09-30T15:06:31.8446918Z === CONT  TestAccSTSAssumeRole_basic
2025-09-30T15:06:32.8489810Z 2025/09/30 15:06:32 AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759244792099317038 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-09-30T15:06:32.8493859Z 	status code: 400, request id: f38dfa58-8c41-4f07-a3d6-d0935e1e12e1
2025-09-30T15:06:32.8496193Z 2025/09/30 15:06:32 Get Secrets error: AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759244792099317038 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-09-30T15:06:32.8498352Z 	status code: 400, request id: f38dfa58-8c41-4f07-a3d6-d0935e1e12e1
2025-09-30T15:06:32.8501745Z   diagnostic_summary=
2025-09-30T15:06:32.8530424Z   
2025-09-30T15:06:32.8561217Z    test_terraform_path=/home/runner/work/_temp/5d04b013-777a-451b-a77d-9b0f66546040/terraform test_working_directory=/tmp/plugintest754871870 test_name=TestAccSTSAssumeRole_basic test_step_number=1
2025-09-30T15:06:32.8562389Z     provider_authentication_test.go:18: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-09-30T15:06:32.8562852Z         
2025-09-30T15:06:32.8563167Z         Error: Invalid provider configuration
2025-09-30T15:06:32.8563457Z         
2025-09-30T15:06:32.8563943Z         Provider "registry.terraform.io/hashicorp/mongodbatlas" requires explicit
2025-09-30T15:06:32.8564590Z         configuration. Add a provider block to the root module and configure the
2025-09-30T15:06:32.8565217Z         provider's required arguments as described in the provider documentation.
2025-09-30T15:06:32.8565598Z         
2025-09-30T15:06:32.8567954Z         Error: AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759244792099317038 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-09-30T15:06:32.8569588Z         	status code: 400, request id: f38dfa58-8c41-4f07-a3d6-d0935e1e12e1
2025-09-30T15:06:32.8569942Z         
2025-09-30T15:06:32.8570388Z           with provider["registry.terraform.io/hashicorp/mongodbatlas"],
2025-09-30T15:06:32.8571047Z           on <empty> line 0:
2025-09-30T15:06:32.8571398Z           (source code not available)
2025-09-30T15:06:32.8571688Z         
2025-09-30T15:06:32.8793679Z --- FAIL: TestAccSTSAssumeRole_basic (1.03s)
```

- 2025-10-01
  - PASS 13 seconds
  - PASS 7 seconds
  - PASS 12 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 13 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 9 seconds
  - PASS 6 seconds
  - PASS 9 seconds
  - PASS 6 seconds
  - PASS 8 seconds
  - PASS 16 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 13 seconds
  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-10-02
  - PASS 11 seconds
  - PASS 7 seconds
  - PASS 11 seconds
- 2025-10-03
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 13 seconds
- 2025-10-04
  - PASS 9 seconds
  - PASS 13 seconds
  - PASS 13 seconds
- 2025-10-05
  - FAIL a second

### Error 2025-10-05T00:29:34+00:00
```
2025-10-05T00:29:34.0449353Z === RUN   TestAccSTSAssumeRole_basic
2025-10-05T00:29:34.0450180Z === CONT  TestAccSTSAssumeRole_basic
2025-10-05T00:29:35.0358001Z 2025/10/05 00:29:35 AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759624174345553660 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-10-05T00:29:35.0360733Z 	status code: 400, request id: 8cd2437f-30d7-4f94-af4e-36b858de8c0a
2025-10-05T00:29:35.0363055Z 2025/10/05 00:29:35 Get Secrets error: AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759624174345553660 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-10-05T00:29:35.0364588Z 	status code: 400, request id: 8cd2437f-30d7-4f94-af4e-36b858de8c0a
2025-10-05T00:29:35.0366374Z   diagnostic_summary=
2025-10-05T00:29:35.0369908Z    tf_proto_version=6.10 tf_rpc=ConfigureProvider tf_req_id=08cbff3d-1c8f-2b5d-7669-9000ee81b1b8
2025-10-05T00:29:35.0420517Z    test_name=TestAccSTSAssumeRole_basic test_terraform_path=/home/runner/work/_temp/1909cbe2-42cb-4f99-bc5b-9522b5f0c2be/terraform
2025-10-05T00:29:35.0421560Z     provider_authentication_test.go:20: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-10-05T00:29:35.0421998Z         
2025-10-05T00:29:35.0422313Z         Error: Invalid provider configuration
2025-10-05T00:29:35.0422698Z         
2025-10-05T00:29:35.0423161Z         Provider "registry.terraform.io/hashicorp/mongodbatlas" requires explicit
2025-10-05T00:29:35.0423789Z         configuration. Add a provider block to the root module and configure the
2025-10-05T00:29:35.0424400Z         provider's required arguments as described in the provider documentation.
2025-10-05T00:29:35.0424772Z         
2025-10-05T00:29:35.0427322Z         Error: AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759624174345553660 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-10-05T00:29:35.0428860Z         	status code: 400, request id: 8cd2437f-30d7-4f94-af4e-36b858de8c0a
2025-10-05T00:29:35.0429224Z         
2025-10-05T00:29:35.0429656Z           with provider["registry.terraform.io/hashicorp/mongodbatlas"],
2025-10-05T00:29:35.0430085Z           on <empty> line 0:
2025-10-05T00:29:35.0430434Z           (source code not available)
2025-10-05T00:29:35.0430712Z         
2025-10-05T00:29:35.0719696Z --- FAIL: TestAccSTSAssumeRole_basic (1.03s)
```

  - PASS 12 seconds
  - FAIL a moment

### Error 2025-10-05T00:29:59+00:00
```
2025-10-05T00:29:59.1718855Z === RUN   TestAccSTSAssumeRole_basic
2025-10-05T00:29:59.1720747Z === CONT  TestAccSTSAssumeRole_basic
2025-10-05T00:29:59.9667167Z 2025/10/05 00:29:59 AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759624199464601551 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-10-05T00:29:59.9669655Z 	status code: 400, request id: 5c92fb44-bda6-4c99-8811-5a9eda59964b
2025-10-05T00:29:59.9692888Z 2025/10/05 00:29:59 Get Secrets error: AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759624199464601551 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-10-05T00:29:59.9695812Z 	status code: 400, request id: 5c92fb44-bda6-4c99-8811-5a9eda59964b
2025-10-05T00:29:59.9699531Z   diagnostic_summary=
2025-10-05T00:29:59.9706154Z    diagnostic_detail=""
2025-10-05T00:29:59.9777429Z    test_name=TestAccSTSAssumeRole_basic test_working_directory=/tmp/plugintest2478060061
2025-10-05T00:29:59.9778300Z     provider_authentication_test.go:20: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-10-05T00:29:59.9778771Z         
2025-10-05T00:29:59.9779088Z         Error: Invalid provider configuration
2025-10-05T00:29:59.9779386Z         
2025-10-05T00:29:59.9779863Z         Provider "registry.terraform.io/hashicorp/mongodbatlas" requires explicit
2025-10-05T00:29:59.9780543Z         configuration. Add a provider block to the root module and configure the
2025-10-05T00:29:59.9781180Z         provider's required arguments as described in the provider documentation.
2025-10-05T00:29:59.9781575Z         
2025-10-05T00:29:59.9784197Z         Error: AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759624199464601551 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-10-05T00:29:59.9785869Z         	status code: 400, request id: 5c92fb44-bda6-4c99-8811-5a9eda59964b
2025-10-05T00:29:59.9786226Z         
2025-10-05T00:29:59.9786681Z           with provider["registry.terraform.io/hashicorp/mongodbatlas"],
2025-10-05T00:29:59.9787101Z           on <empty> line 0:
2025-10-05T00:29:59.9787449Z           (source code not available)
2025-10-05T00:29:59.9787717Z         
2025-10-05T00:30:00.0008490Z --- FAIL: TestAccSTSAssumeRole_basic (0.83s)
```

- 2025-10-06
  - PASS 13 seconds
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-10-07
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 12 seconds
- 2025-10-08
  - PASS 11 seconds
  - PASS 8 seconds
  - PASS 11 seconds
- 2025-10-09
  - PASS 10 seconds
  - FAIL 5 seconds

### Error 2025-10-09T00:27:09+00:00
```
2025-10-09T00:27:09.0677752Z === RUN   TestAccSTSAssumeRole_basic
2025-10-09T00:27:09.0679025Z === CONT  TestAccSTSAssumeRole_basic
2025-10-09T00:27:14.6949122Z    test_terraform_path=/home/runner/work/_temp/fddb4af5-a61e-44ca-ae1f-37bdb0ee662e/terraform test_name=TestAccSTSAssumeRole_basic test_working_directory=/tmp/plugintest4211234314 test_step_number=1
2025-10-09T00:27:14.6950909Z     provider_authentication_test.go:20: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-10-09T00:27:14.6951809Z         
2025-10-09T00:27:14.6953661Z         Error: error getting organizations information: Get "https://cloud-dev.mongodb.com/api/atlas/v2/orgs/64808d5f33a0c71e882ef19c": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-10-09T00:27:14.6954813Z         
2025-10-09T00:27:14.6955643Z           with data.mongodbatlas_organization.test,
2025-10-09T00:27:14.6956401Z           on terraform_plugin_test.tf line 16, in data "mongodbatlas_organization" "test":
2025-10-09T00:27:14.6956985Z           16: 		data "mongodbatlas_organization" "test" {
2025-10-09T00:27:14.6957301Z         
2025-10-09T00:27:14.7189577Z --- FAIL: TestAccSTSAssumeRole_basic (5.65s)
```

  - PASS 11 seconds
- 2025-10-10
  - PASS 14 seconds
  - PASS 14 seconds
  - PASS 16 seconds
- 2025-10-11
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 9 seconds
- 2025-10-12
  - PASS 7 seconds
  - PASS 14 seconds
  - PASS 14 seconds
- 2025-10-13
  - PASS 11 seconds
  - PASS 15 seconds
  - PASS 11 seconds
- 2025-10-14
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 16 seconds
- 2025-10-15
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 17 seconds
- 2025-10-16
  - PASS 9 seconds
  - PASS 13 seconds
  - PASS 16 seconds
- 2025-10-17
  - PASS 9 seconds
  - PASS 16 seconds
  - PASS 17 seconds
- 2025-10-18
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-19
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-10-20
  - PASS 9 seconds
  - PASS 14 seconds
  - PASS 11 seconds
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-21
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-22
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 14 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 13 seconds
- 2025-10-23
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-24
  - PASS 10 seconds
  - PASS 15 seconds
  - PASS 15 seconds
- 2025-10-25
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-26
  - PASS 9 seconds
  - PASS 12 seconds
  - PASS 13 seconds
- 2025-10-27
  - PASS 9 seconds
  - PASS 10 seconds
  - PASS 13 seconds
- 2025-10-28
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown
- 2025-10-29
  - PASS 10 seconds
  - PASS 19 seconds
  - PASS 9 seconds
- 2025-10-30
  - SKIP unknown
  - SKIP unknown
  - SKIP unknown