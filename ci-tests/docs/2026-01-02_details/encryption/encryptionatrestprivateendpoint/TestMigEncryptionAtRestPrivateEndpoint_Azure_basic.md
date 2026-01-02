# encryption/encryptionatrestprivateendpoint/TestMigEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 18 TestRuns in dev, qa from 2025-12-05 to 2026-01-02 from master branch: 1 unique tests, PASS(x 16) FAIL(x 2)
Success rate: 88.89%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-12-10 00:39](#error-2025-12-10t0039030000) |  | dev | 4.08s
[2025-12-10 17:23](#error-2025-12-10t1723250000) |  | dev | 4.06s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05 PASS 7 seconds
- 2025-12-06: MISSING
- 2025-12-07: MISSING
- 2025-12-08 PASS 8 seconds
- 2025-12-09: MISSING
- 2025-12-10
  - FAIL 4 seconds

### Error 2025-12-10T00:39:03+00:00
```
2025-12-10T00:39:03.0171273Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-12-10T00:39:03.0172514Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-7995534503828341060
2025-12-10T00:39:03.0186411Z    test_name=TestMigEncryptionAtRestPrivateEndpoint_Azure_basic test_terraform_path=/home/runner/work/_temp/700fae1a-aa83-4799-8d31-4900139197ca/terraform test_working_directory=/tmp/plugintest1737033744
2025-12-10T00:39:03.0188387Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-12-10T00:39:03.0189135Z         
2025-12-10T00:39:03.0189947Z         Error: error creating Encryption At Rest: 6938bf81342a5d087f20c7a5
2025-12-10T00:39:03.0190623Z         
2025-12-10T00:39:03.0191479Z           with mongodbatlas_encryption_at_rest.test,
2025-12-10T00:39:03.0192749Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-10T00:39:03.0193924Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-10T00:39:03.0194535Z         
2025-12-10T00:39:03.0195610Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6938bf81342a5d087f20c7a5/encryptionAtRest
2025-12-10T00:39:03.0196680Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-10T00:39:03.0197690Z         "AZURE_KEY_VAULT_CREDENTIALS_DEPRECATED") Detail: Credentials based
2025-12-10T00:39:03.0198873Z         authentication is no longer supported for Azure Key Vault. Reason: Bad
2025-12-10T00:39:03.0199793Z         Request. Params: [], BadRequestDetail: 
2025-12-10T00:39:03.0200751Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (4.83s)
```

  - FAIL 4 seconds

### Error 2025-12-10T17:23:25+00:00
```
2025-12-10T17:23:25.4006067Z === RUN   TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-12-10T17:23:25.4007340Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-3361620671609452508
2025-12-10T17:23:25.4024211Z    test_step_number=1 test_name=TestMigEncryptionAtRestPrivateEndpoint_Azure_basic
2025-12-10T17:23:25.4025412Z     resource_migration_test.go:12: Step 1/2 error: Error running apply: exit status 1
2025-12-10T17:23:25.4026150Z         
2025-12-10T17:23:25.4026936Z         Error: error creating Encryption At Rest: 6939aadeb3f5ba295af89a75
2025-12-10T17:23:25.4027744Z         
2025-12-10T17:23:25.4028392Z           with mongodbatlas_encryption_at_rest.test,
2025-12-10T17:23:25.4029622Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-12-10T17:23:25.4030759Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-12-10T17:23:25.4031352Z         
2025-12-10T17:23:25.4032398Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6939aadeb3f5ba295af89a75/encryptionAtRest
2025-12-10T17:23:25.4033455Z         PATCH: HTTP 400 Bad Request (Error code:
2025-12-10T17:23:25.4034412Z         "AZURE_KEY_VAULT_CREDENTIALS_DEPRECATED") Detail: Credentials based
2025-12-10T17:23:25.4035536Z         authentication is no longer supported for Azure Key Vault. Reason: Bad
2025-12-10T17:23:25.4036757Z         Request. Params: [], BadRequestDetail: 
2025-12-10T17:23:25.4037716Z --- FAIL: TestMigEncryptionAtRestPrivateEndpoint_Azure_basic (4.56s)
```

- 2025-12-11: MISSING
- 2025-12-12 PASS 11 seconds
- 2025-12-13: MISSING
- 2025-12-14: MISSING
- 2025-12-15 PASS 11 seconds
- 2025-12-16: MISSING
- 2025-12-17 PASS 10 seconds
- 2025-12-18: MISSING
- 2025-12-19 PASS 10 seconds
- 2025-12-20: MISSING
- 2025-12-21: MISSING
- 2025-12-22 PASS 10 seconds
- 2025-12-23: MISSING
- 2025-12-24 PASS 10 seconds
- 2025-12-25: MISSING
- 2025-12-26 PASS 8 seconds
- 2025-12-27: MISSING
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31 PASS 9 seconds
- 2026-01-01: MISSING
- 2026-01-02 PASS 10 seconds

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 9 seconds
- 2025-12-08: MISSING
- 2025-12-09 PASS 7 seconds
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 9 seconds
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 9 seconds
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 9 seconds
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
