# 1/provider/TestAccSTSAssumeRole_basic Test Details
# Found 35 TestRuns in dev, qa from 2025-09-30 to 2025-10-02 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-30 07:41](#error-2025-09-30t0741530000) |  | qa | 0.07s
[2025-09-30 07:41](#error-2025-09-30t0741540000) |  | qa | 1.01s
[2025-09-30 15:06](#error-2025-09-30t1506220000) |  | qa | 0.07s
[2025-09-30 15:06](#error-2025-09-30t1506310000) |  | qa | 1.00s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03: MISSING
- 2025-09-04: MISSING
- 2025-09-05: MISSING
- 2025-09-06: MISSING
- 2025-09-07: MISSING
- 2025-09-08: MISSING
- 2025-09-09: MISSING
- 2025-09-10: MISSING
- 2025-09-11: MISSING
- 2025-09-12: MISSING
- 2025-09-13: MISSING
- 2025-09-14: MISSING
- 2025-09-15: MISSING
- 2025-09-16: MISSING
- 2025-09-17: MISSING
- 2025-09-18: MISSING
- 2025-09-19: MISSING
- 2025-09-20: MISSING
- 2025-09-21: MISSING
- 2025-09-22: MISSING
- 2025-09-23: MISSING
- 2025-09-24: MISSING
- 2025-09-25: MISSING
- 2025-09-26: MISSING
- 2025-09-27: MISSING
- 2025-09-28: MISSING
- 2025-09-29: MISSING
- 2025-09-30
  - PASS 8 seconds
  - FAIL a moment

### Error 2025-09-30T07:41:53+00:00
```
2025-09-30T07:41:53.9616822Z === RUN   TestAccSTSAssumeRole_basic
2025-09-30T07:41:53.9617898Z === CONT  TestAccSTSAssumeRole_basic
2025-09-30T07:41:54.6205825Z 2025/09/30 07:41:54 AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759218114151296500 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-09-30T07:41:54.6209537Z 	status code: 400, request id: 58c88494-e98d-4e69-bd4d-ef17ee17cf28
2025-09-30T07:41:54.6213116Z 2025/09/30 07:41:54 Get Secrets error: AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759218114151296500 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-09-30T07:41:54.6216836Z 	status code: 400, request id: 58c88494-e98d-4e69-bd4d-ef17ee17cf28
2025-09-30T07:41:54.6220045Z   diagnostic_summary=
2025-09-30T07:41:54.6226851Z    diagnostic_detail="" tf_req_id=85d40447-e0bf-fc7a-44e7-be4ff750253c
2025-09-30T07:41:54.6282241Z    test_working_directory=/tmp/plugintest3404699589 test_name=TestAccSTSAssumeRole_basic
2025-09-30T07:41:54.6283047Z     provider_authentication_test.go:18: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-09-30T07:41:54.6283520Z         
2025-09-30T07:41:54.6283843Z         Error: Invalid provider configuration
2025-09-30T07:41:54.6284151Z         
2025-09-30T07:41:54.6284636Z         Provider "registry.terraform.io/hashicorp/mongodbatlas" requires explicit
2025-09-30T07:41:54.6285305Z         configuration. Add a provider block to the root module and configure the
2025-09-30T07:41:54.6285942Z         provider's required arguments as described in the provider documentation.
2025-09-30T07:41:54.6286337Z         
2025-09-30T07:41:54.6288754Z         Error: AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759218114151296500 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-09-30T07:41:54.6290412Z         	status code: 400, request id: 58c88494-e98d-4e69-bd4d-ef17ee17cf28
2025-09-30T07:41:54.6290777Z         
2025-09-30T07:41:54.6291234Z           with provider["registry.terraform.io/hashicorp/mongodbatlas"],
2025-09-30T07:41:54.6291660Z           on <empty> line 0:
2025-09-30T07:41:54.6292340Z           (source code not available)
2025-09-30T07:41:54.6292627Z         
2025-09-30T07:41:54.6510312Z --- FAIL: TestAccSTSAssumeRole_basic (0.69s)
```

  - FAIL a second

### Error 2025-09-30T07:41:54+00:00
```
2025-09-30T07:41:54.2250620Z === RUN   TestAccSTSAssumeRole_basic
2025-09-30T07:41:54.2251780Z === CONT  TestAccSTSAssumeRole_basic
2025-09-30T07:41:55.2756345Z 2025/09/30 07:41:55 AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759218114404173222 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-09-30T07:41:55.2760504Z 	status code: 400, request id: 20cfcc03-51c4-403d-9998-5fe7f8020fe6
2025-09-30T07:41:55.2764197Z 2025/09/30 07:41:55 Get Secrets error: AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759218114404173222 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-09-30T07:41:55.2767671Z 	status code: 400, request id: 20cfcc03-51c4-403d-9998-5fe7f8020fe6
2025-09-30T07:41:55.2771706Z   diagnostic_summary=
2025-09-30T07:41:55.2778009Z    tf_proto_version=6.9 tf_req_id=de35943c-7cc6-b531-48e6-95b852f2856e
2025-09-30T07:41:55.2851763Z    test_name=TestAccSTSAssumeRole_basic
2025-09-30T07:41:55.2852417Z     provider_authentication_test.go:18: Step 1/2 error: Error running pre-apply plan: exit status 1
2025-09-30T07:41:55.2852873Z         
2025-09-30T07:41:55.2853178Z         Error: Invalid provider configuration
2025-09-30T07:41:55.2853461Z         
2025-09-30T07:41:55.2853923Z         Provider "registry.terraform.io/hashicorp/mongodbatlas" requires explicit
2025-09-30T07:41:55.2854554Z         configuration. Add a provider block to the root module and configure the
2025-09-30T07:41:55.2855181Z         provider's required arguments as described in the provider documentation.
2025-09-30T07:41:55.2855552Z         
2025-09-30T07:41:55.2857968Z         Error: AccessDeniedException: User: arn:aws:sts::358363220050:assumed-role/terraform-provider-mongodbatlas-acceptancetests/1759218114404173222 is not authorized to perform: secretsmanager:GetSecretValue on resource: terraform-provider-mongodbatlas/acceptancetests/atlas-api-keys-qa because no identity-based policy allows the secretsmanager:GetSecretValue action
2025-09-30T07:41:55.2859826Z         	status code: 400, request id: 20cfcc03-51c4-403d-9998-5fe7f8020fe6
2025-09-30T07:41:55.2860181Z         
2025-09-30T07:41:55.2860623Z           with provider["registry.terraform.io/hashicorp/mongodbatlas"],
2025-09-30T07:41:55.2861042Z           on <empty> line 0:
2025-09-30T07:41:55.2861379Z           (source code not available)
2025-09-30T07:41:55.2861647Z         
2025-09-30T07:41:55.3090937Z --- FAIL: TestAccSTSAssumeRole_basic (1.08s)
```

  - PASS 9 seconds
  - PASS 8 seconds
  - PASS 9 seconds
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