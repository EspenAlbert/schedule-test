# encryption/encryptionatrest/TestMigEncryptionAtRest_basicAWS Test Details
# Found 40 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 35) FAIL(x 5)
Success rate: 87.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-08-07 00:34](#error-2025-08-07t0034470000) |  | dev | unknown | 40.09s
[2025-08-09 00:28](#error-2025-08-09t0028510000) |  | dev |  | 2.05s
[2025-08-11 00:32](#error-2025-08-11t0032310000) |  | dev |  | 2.05s
[2025-08-28 00:27](#error-2025-08-28t0027380000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest | dev |  | 2.01s
[2025-08-29 00:27](#error-2025-08-29t0027580000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest | dev |  | 2.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 5 seconds
- 2025-08-07

### Error 2025-08-07T00:34:47+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-08-07T00:34:47.279000+00:00-TestMigEncryptionAtRest_basicAWS',confidence=1.0,ts_when='28 days ago')

```
2025-08-07T00:34:47.2799467Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-08-07T00:34:47.2804200Z     resource_migration_test.go:33: Error running post-test destroy, there may be dangling resources: encryptionAtRest (6790e57a9b41416f5c216fee) still exists: err: %!s(<nil>)
2025-08-07T00:34:47.2805017Z --- FAIL: TestMigEncryptionAtRest_basicAWS (40.92s)
```

- 2025-08-08 PASS 6 seconds
- 2025-08-09

### Error 2025-08-09T00:28:51+00:00
```
2025-08-09T00:28:51.0671625Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-08-09T00:28:51.0682363Z    test_terraform_path=/home/runner/work/_temp/7f280610-5770-468d-97bc-03a5cb8e701b/terraform test_name=TestMigEncryptionAtRest_basicAWS
2025-08-09T00:28:51.0683265Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-08-09T00:28:51.0683701Z         
2025-08-09T00:28:51.0684154Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-09T00:28:51.0684535Z         
2025-08-09T00:28:51.0684897Z           with mongodbatlas_encryption_at_rest.test,
2025-08-09T00:28:51.0685843Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-09T00:28:51.0686496Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-09T00:28:51.0686838Z         
2025-08-09T00:28:51.0687432Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-09T00:28:51.0688031Z         PATCH: HTTP 400 Bad Request (Error code:
2025-08-09T00:28:51.0688692Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-08-09T00:28:51.0689441Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-08-09T00:28:51.0690118Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-08-09T00:28:51.0690756Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-08-09T00:28:51.0691213Z         BadRequestDetail: 
2025-08-09T00:28:51.0691537Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.53s)
```

- 2025-08-10 PASS 7 seconds
- 2025-08-11

### Error 2025-08-11T00:32:31+00:00
```
2025-08-11T00:32:31.3394491Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-08-11T00:32:31.3406704Z   
2025-08-11T00:32:31.3407329Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-08-11T00:32:31.3407892Z         
2025-08-11T00:32:31.3408428Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-11T00:32:31.3408887Z         
2025-08-11T00:32:31.3409322Z           with mongodbatlas_encryption_at_rest.test,
2025-08-11T00:32:31.3410175Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-11T00:32:31.3410958Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-11T00:32:31.3411299Z         
2025-08-11T00:32:31.3411884Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-11T00:32:31.3412482Z         PATCH: HTTP 400 Bad Request (Error code:
2025-08-11T00:32:31.3413136Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-08-11T00:32:31.3413987Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-08-11T00:32:31.3414648Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-08-11T00:32:31.3415275Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-08-11T00:32:31.3415725Z         BadRequestDetail: 
2025-08-11T00:32:31.3416053Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.49s)
```

- 2025-08-12 PASS 6 seconds
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS 7 seconds
- 2025-08-15 PASS 5 seconds
- 2025-08-16 PASS 8 seconds
- 2025-08-17 PASS 5 seconds
- 2025-08-18 PASS 7 seconds
- 2025-08-19 PASS 5 seconds
- 2025-08-20
  - PASS 6 seconds
  - PASS 7 seconds
- 2025-08-21 PASS 6 seconds
- 2025-08-22 PASS 6 seconds
- 2025-08-23 PASS 7 seconds
- 2025-08-24 PASS 5 seconds
- 2025-08-25 PASS 7 seconds
- 2025-08-26 PASS 8 seconds
- 2025-08-27 PASS 8 seconds
- 2025-08-28

### Error 2025-08-28T00:27:38+00:00
```
2025-08-28T00:27:38.3381719Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-08-28T00:27:38.3393536Z   
2025-08-28T00:27:38.3394165Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-08-28T00:27:38.3394664Z         
2025-08-28T00:27:38.3395180Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-28T00:27:38.3395618Z         
2025-08-28T00:27:38.3396051Z           with mongodbatlas_encryption_at_rest.test,
2025-08-28T00:27:38.3396858Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-28T00:27:38.3397522Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-28T00:27:38.3397871Z         
2025-08-28T00:27:38.3398802Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-28T00:27:38.3399586Z         PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-08-28T00:27:38.3400255Z         cannot assume the specified role (679243c15ec3be271d1d7952). Reason: Bad
2025-08-28T00:27:38.3400874Z         Request. Params: [679243c15ec3be271d1d7952], BadRequestDetail: 
2025-08-28T00:27:38.3401305Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.06s)
```

- 2025-08-29
  - FAIL 2 seconds

### Error 2025-08-29T00:27:58+00:00
```
2025-08-29T00:27:58.7809166Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-08-29T00:27:58.7820986Z    test_working_directory=/tmp/plugintest2361562516
2025-08-29T00:27:58.7822203Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-08-29T00:27:58.7823083Z         
2025-08-29T00:27:58.7823957Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-29T00:27:58.7824708Z         
2025-08-29T00:27:58.7825444Z           with mongodbatlas_encryption_at_rest.test,
2025-08-29T00:27:58.7826945Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-29T00:27:58.7828386Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-29T00:27:58.7828997Z         
2025-08-29T00:27:58.7830118Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-29T00:27:58.7831551Z         PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-08-29T00:27:58.7832788Z         cannot assume the specified role (679243c15ec3be271d1d7952). Reason: Bad
2025-08-29T00:27:58.7833882Z         Request. Params: [679243c15ec3be271d1d7952], BadRequestDetail: 
2025-08-29T00:27:58.7834332Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.27s)
```

  - PASS 6 seconds
  - PASS 7 seconds
- 2025-08-30 PASS 5 seconds
- 2025-08-31 PASS 7 seconds
- 2025-09-01
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 7 seconds
  - PASS 7 seconds
- 2025-09-02 PASS 7 seconds
- 2025-09-03 PASS 5 seconds
- 2025-09-04 PASS 6 seconds