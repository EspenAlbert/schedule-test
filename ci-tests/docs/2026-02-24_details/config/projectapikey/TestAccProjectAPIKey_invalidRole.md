# config/projectapikey/TestAccProjectAPIKey_invalidRole Test Details
# Found 36 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 31) FAIL(x 5)
Success rate: 86.11%

## DEV Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS a second
- 2026-01-27 PASS a second
- 2026-01-28 PASS a second
- 2026-01-29 PASS a second
- 2026-01-30 PASS a second
- 2026-01-31 PASS a second
- 2026-02-01: MISSING
- 2026-02-02 PASS a second
- 2026-02-03 PASS a second
- 2026-02-04 PASS a second
- 2026-02-05 PASS a second
- 2026-02-06 PASS a second
- 2026-02-07 PASS a second
- 2026-02-08: MISSING
- 2026-02-09 PASS a second
- 2026-02-10 PASS a second
- 2026-02-11 PASS a second
- 2026-02-12 PASS a second
- 2026-02-13 PASS a second
- 2026-02-14 PASS a second
- 2026-02-15: MISSING
- 2026-02-16 PASS a second
- 2026-02-17 PASS a second
- 2026-02-18 PASS a second
- 2026-02-19 PASS a second
- 2026-02-20 PASS a second
- 2026-02-21 PASS a second
- 2026-02-22: MISSING
- 2026-02-23 PASS a second
- 2026-02-24 PASS a second

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-01 00:46](#error-2026-02-01t0046020000) | INVALID_ENUM_VALUE /api/atlas/v2/groups/697ea1e6d7b482da407ca1b5/apiKeys | qa | 1.05s
[2026-02-04 11:14](#error-2026-02-04t1114400000) | INVALID_ENUM_VALUE /api/atlas/v2/groups/698329c0a401dc0c65b74a0a/apiKeys | qa | 1.04s
[2026-02-04 12:32](#error-2026-02-04t1232030000) | INVALID_ENUM_VALUE /api/atlas/v2/groups/69833bde86f384157d53e337/apiKeys | qa | 1.04s
[2026-02-04 13:28](#error-2026-02-04t1328450000) | INVALID_ENUM_VALUE /api/atlas/v2/groups/698349227765c5c3290bf50e/apiKeys | qa | 1.09s
[2026-02-08 00:50](#error-2026-02-08t0050120000) | INVALID_ENUM_VALUE /api/atlas/v2/groups/6987dd6082ac3ab802eba229/apiKeys | qa | 1.05s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01

### Error 2026-02-01T00:46:02+00:00
```
2026-02-01T00:46:02.4407958Z === RUN   TestAccProjectAPIKey_invalidRole
2026-02-01T00:46:02.4409876Z === CONT  TestAccProjectAPIKey_invalidRole
2026-02-01T00:46:02.4428283Z === NAME  TestAccProjectAPIKey_invalidRole
2026-02-01T00:46:02.4429039Z     resource_project_api_key_test.go:241: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-01T00:46:02.4429581Z         
2026-02-01T00:46:02.4431184Z         Error: https://cloud-qa.mongodb.com/api/atlas/v2/groups/697ea1e6d7b482da407ca1b5/apiKeys POST: HTTP 400 Bad Request (Error code: "INVALID_ENUM_VALUE") Detail: An invalid enumeration value INVALID_ROLE was specified. Reason: Bad Request. Params: [INVALID_ROLE], BadRequestDetail: 
2026-02-01T00:46:02.4432463Z         
2026-02-01T00:46:02.4432800Z           with mongodbatlas_project_api_key.test,
2026-02-01T00:46:02.4433512Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2026-02-01T00:46:02.4434389Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2026-02-01T00:46:02.4434711Z         
2026-02-01T00:46:02.4435020Z --- FAIL: TestAccProjectAPIKey_invalidRole (1.51s)
```

- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04
  - FAIL a second

### Error 2026-02-04T11:14:40+00:00
```
2026-02-04T11:14:40.2427975Z === RUN   TestAccProjectAPIKey_invalidRole
2026-02-04T11:14:40.2429678Z === CONT  TestAccProjectAPIKey_invalidRole
2026-02-04T11:14:40.2447024Z === NAME  TestAccProjectAPIKey_invalidRole
2026-02-04T11:14:40.2447759Z     resource_project_api_key_test.go:241: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-04T11:14:40.2448535Z         
2026-02-04T11:14:40.2450100Z         Error: https://cloud-qa.mongodb.com/api/atlas/v2/groups/698329c0a401dc0c65b74a0a/apiKeys POST: HTTP 400 Bad Request (Error code: "INVALID_ENUM_VALUE") Detail: An invalid enumeration value INVALID_ROLE was specified. Reason: Bad Request. Params: [INVALID_ROLE], BadRequestDetail: 
2026-02-04T11:14:40.2451348Z         
2026-02-04T11:14:40.2451696Z           with mongodbatlas_project_api_key.test,
2026-02-04T11:14:40.2452374Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2026-02-04T11:14:40.2453020Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2026-02-04T11:14:40.2453357Z         
2026-02-04T11:14:40.2454043Z --- FAIL: TestAccProjectAPIKey_invalidRole (1.39s)
```

  - FAIL a second

### Error 2026-02-04T12:32:03+00:00
```
2026-02-04T12:32:03.1969011Z === RUN   TestAccProjectAPIKey_invalidRole
2026-02-04T12:32:03.1972550Z === CONT  TestAccProjectAPIKey_invalidRole
2026-02-04T12:32:03.1999391Z === NAME  TestAccProjectAPIKey_invalidRole
2026-02-04T12:32:03.2000067Z     resource_project_api_key_test.go:241: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-04T12:32:03.2000593Z         
2026-02-04T12:32:03.2001963Z         Error: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69833bde86f384157d53e337/apiKeys POST: HTTP 400 Bad Request (Error code: "INVALID_ENUM_VALUE") Detail: An invalid enumeration value INVALID_ROLE was specified. Reason: Bad Request. Params: [INVALID_ROLE], BadRequestDetail: 
2026-02-04T12:32:03.2004015Z         
2026-02-04T12:32:03.2004570Z           with mongodbatlas_project_api_key.test,
2026-02-04T12:32:03.2005828Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2026-02-04T12:32:03.2006597Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2026-02-04T12:32:03.2006922Z         
2026-02-04T12:32:03.2007597Z --- FAIL: TestAccProjectAPIKey_invalidRole (1.42s)
```

  - FAIL a second

### Error 2026-02-04T13:28:45+00:00
```
2026-02-04T13:28:45.8361988Z === RUN   TestAccProjectAPIKey_invalidRole
2026-02-04T13:28:45.8366503Z === CONT  TestAccProjectAPIKey_invalidRole
2026-02-04T13:28:45.8383460Z === NAME  TestAccProjectAPIKey_invalidRole
2026-02-04T13:28:45.8384210Z     resource_project_api_key_test.go:241: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-04T13:28:45.8384781Z         
2026-02-04T13:28:45.8386501Z         Error: https://cloud-qa.mongodb.com/api/atlas/v2/groups/698349227765c5c3290bf50e/apiKeys POST: HTTP 400 Bad Request (Error code: "INVALID_ENUM_VALUE") Detail: An invalid enumeration value INVALID_ROLE was specified. Reason: Bad Request. Params: [INVALID_ROLE], BadRequestDetail: 
2026-02-04T13:28:45.8387834Z         
2026-02-04T13:28:45.8388178Z           with mongodbatlas_project_api_key.test,
2026-02-04T13:28:45.8388861Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2026-02-04T13:28:45.8389505Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2026-02-04T13:28:45.8389835Z         
2026-02-04T13:28:45.8390098Z --- FAIL: TestAccProjectAPIKey_invalidRole (1.89s)
```

- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08

### Error 2026-02-08T00:50:12+00:00
```
2026-02-08T00:50:12.7358531Z === RUN   TestAccProjectAPIKey_invalidRole
2026-02-08T00:50:12.7360905Z === CONT  TestAccProjectAPIKey_invalidRole
2026-02-08T00:50:12.7377989Z === NAME  TestAccProjectAPIKey_invalidRole
2026-02-08T00:50:12.7378745Z     resource_project_api_key_test.go:241: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-08T00:50:12.7379293Z         
2026-02-08T00:50:12.7380796Z         Error: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6987dd6082ac3ab802eba229/apiKeys POST: HTTP 400 Bad Request (Error code: "INVALID_ENUM_VALUE") Detail: An invalid enumeration value INVALID_ROLE was specified. Reason: Bad Request. Params: [INVALID_ROLE], BadRequestDetail: 
2026-02-08T00:50:12.7382137Z         
2026-02-08T00:50:12.7382571Z           with mongodbatlas_project_api_key.test,
2026-02-08T00:50:12.7383267Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2026-02-08T00:50:12.7383911Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2026-02-08T00:50:12.7384254Z         
2026-02-08T00:50:12.7385032Z --- FAIL: TestAccProjectAPIKey_invalidRole (1.54s)
```

- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS a second
- 2026-02-16: MISSING
- 2026-02-17
  - PASS a second
  - PASS a second
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20 PASS a second
- 2026-02-21: MISSING
- 2026-02-22 PASS a second
- 2026-02-23: MISSING
- 2026-02-24: MISSING
