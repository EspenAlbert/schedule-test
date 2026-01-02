# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-09 00:36](#error-2025-12-09t0036370000) |  | dev | 2.04s
[2025-12-10 00:39](#error-2025-12-10t0039030000) |  | dev | 0.05s
[2025-12-10 17:23](#error-2025-12-10t1723250000) |  | dev | 0.04s
[2025-12-11 00:37](#error-2025-12-11t0037020000) |  | dev | 2.07s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS 3 minutes
- 2025-12-05 PASS 3 minutes
- 2025-12-06 PASS 3 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 3 minutes
- 2025-12-09

### Error 2025-12-09T00:36:37+00:00
```
2025-12-09T00:36:37.6710300Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-12-09T00:36:37.6711103Z     resource_test.go:43: Creating execution project: test-acc-tf-p-8962052018159481575
2025-12-09T00:36:37.6731430Z   
2025-12-09T00:36:37.6732147Z     resource_test.go:43: Step 1/3 error: Error running apply: exit status 1
2025-12-09T00:36:37.6732836Z         
2025-12-09T00:36:37.6733641Z         Error: error creating Encryption At Rest: 69376dbb34dc5f47bd0371db
2025-12-09T00:36:37.6734331Z         
2025-12-09T00:36:37.6734966Z           with mongodbatlas_encryption_at_rest.test,
2025-12-09T00:36:37.6735868Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-09T00:36:37.6736529Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-09T00:36:37.6736880Z         
2025-12-09T00:36:37.6737471Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69376dbb34dc5f47bd0371db/encryptionAtRest
2025-12-09T00:36:37.6738086Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-09T00:36:37.6738619Z         "AZURE_KEY_VAULT_CREDENTIALS_DEPRECATED") Detail: Credentials based
2025-12-09T00:36:37.6739251Z         authentication is no longer supported for Azure Key Vault. Reason: Bad
2025-12-09T00:36:37.6739755Z         Request. Params: [], BadRequestDetail: 
2025-12-09T00:36:37.6740198Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (2.39s)
```

- 2025-12-10
  - FAIL a moment

### Error 2025-12-10T00:39:03+00:00
```
2025-12-10T00:39:03.0203605Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-12-10T00:39:03.0226667Z   
2025-12-10T00:39:03.0227365Z     resource_test.go:43: Step 1/3 error: Error running apply: exit status 1
2025-12-10T00:39:03.0228016Z         
2025-12-10T00:39:03.0228790Z         Error: error creating Encryption At Rest: 6938bf81342a5d087f20c7a5
2025-12-10T00:39:03.0229427Z         
2025-12-10T00:39:03.0230058Z           with mongodbatlas_encryption_at_rest.test,
2025-12-10T00:39:03.0231402Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-10T00:39:03.0232525Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-10T00:39:03.0233102Z         
2025-12-10T00:39:03.0234138Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6938bf81342a5d087f20c7a5/encryptionAtRest
2025-12-10T00:39:03.0235173Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-10T00:39:03.0236116Z         "AZURE_KEY_VAULT_CREDENTIALS_DEPRECATED") Detail: Credentials based
2025-12-10T00:39:03.0237228Z         authentication is no longer supported for Azure Key Vault. Reason: Bad
2025-12-10T00:39:03.0238087Z         Request. Params: [], BadRequestDetail: 
2025-12-10T00:39:03.0238782Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.52s)
```

  - FAIL a moment

### Error 2025-12-10T17:23:25+00:00
```
2025-12-10T17:23:25.4040324Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-12-10T17:23:25.4063111Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-12-10T17:23:25.4064122Z     resource_test.go:43: Step 1/3 error: Error running apply: exit status 1
2025-12-10T17:23:25.4064793Z         
2025-12-10T17:23:25.4065571Z         Error: error creating Encryption At Rest: 6939aadeb3f5ba295af89a75
2025-12-10T17:23:25.4066281Z         
2025-12-10T17:23:25.4066920Z           with mongodbatlas_encryption_at_rest.test,
2025-12-10T17:23:25.4068305Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-10T17:23:25.4069454Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-10T17:23:25.4070055Z         
2025-12-10T17:23:25.4071099Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6939aadeb3f5ba295af89a75/encryptionAtRest
2025-12-10T17:23:25.4072153Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-10T17:23:25.4073116Z         "AZURE_KEY_VAULT_CREDENTIALS_DEPRECATED") Detail: Credentials based
2025-12-10T17:23:25.4074233Z         authentication is no longer supported for Azure Key Vault. Reason: Bad
2025-12-10T17:23:25.4075120Z         Request. Params: [], BadRequestDetail: 
2025-12-10T17:23:25.4075895Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (0.43s)
```

- 2025-12-11

### Error 2025-12-11T00:37:02+00:00
```
2025-12-11T00:37:02.0610912Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2025-12-11T00:37:02.0612156Z     resource_test.go:43: Creating execution project: test-acc-tf-p-3343856636032727516
2025-12-11T00:37:02.0636291Z   
2025-12-11T00:37:02.0637123Z     resource_test.go:43: Step 1/3 error: Error running apply: exit status 1
2025-12-11T00:37:02.0637798Z         
2025-12-11T00:37:02.0638576Z         Error: error creating Encryption At Rest: 693a10d77e4083401754688e
2025-12-11T00:37:02.0639240Z         
2025-12-11T00:37:02.0639885Z           with mongodbatlas_encryption_at_rest.test,
2025-12-11T00:37:02.0641122Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-11T00:37:02.0642268Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-11T00:37:02.0642859Z         
2025-12-11T00:37:02.0643907Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/693a10d77e4083401754688e/encryptionAtRest
2025-12-11T00:37:02.0645137Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-11T00:37:02.0646109Z         "AZURE_KEY_VAULT_CREDENTIALS_DEPRECATED") Detail: Credentials based
2025-12-11T00:37:02.0647236Z         authentication is no longer supported for Azure Key Vault. Reason: Bad
2025-12-11T00:37:02.0648138Z         Request. Params: [], BadRequestDetail: 
2025-12-11T00:37:02.0648906Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (2.73s)
```

- 2025-12-12 PASS 4 minutes
- 2025-12-13 PASS 3 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 3 minutes
- 2025-12-16 PASS 3 minutes
- 2025-12-17 PASS 3 minutes
- 2025-12-18 PASS 3 minutes
- 2025-12-19 PASS 3 minutes
- 2025-12-20 PASS 3 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 3 minutes
- 2025-12-23 PASS 3 minutes
- 2025-12-24 PASS 3 minutes
- 2025-12-25 PASS 4 minutes
- 2025-12-26 PASS 3 minutes
- 2025-12-27 PASS 3 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 3 minutes
- 2025-12-31 PASS 4 minutes
- 2026-01-01 PASS 3 minutes
- 2026-01-02 PASS 3 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 3 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 3 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 3 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 3 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 3 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
