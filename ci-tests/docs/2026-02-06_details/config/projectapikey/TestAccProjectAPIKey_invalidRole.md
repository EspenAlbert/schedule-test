# config/projectapikey/TestAccProjectAPIKey_invalidRole Test Details
# Found 38 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 7)
Success rate: 81.58%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-22 00:36](#error-2026-01-22t0036270000) | BAD_REQUEST /api/atlas/v2/groups/697170a1e11aa161979aab98/apiKeys | dev | 1.03s
[2026-01-23 00:35](#error-2026-01-23t0035380000) | BAD_REQUEST /api/atlas/v2/groups/6972c1f5f453a429f01aa0f0/apiKeys | dev | 1.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a second
- 2026-01-09
  - PASS a second
  - PASS a second
  - PASS a second
- 2026-01-10 PASS a second
- 2026-01-11: MISSING
- 2026-01-12 PASS a second
- 2026-01-13 PASS a second
- 2026-01-14 PASS a second
- 2026-01-15 PASS a second
- 2026-01-16 PASS a second
- 2026-01-17 PASS a second
- 2026-01-18: MISSING
- 2026-01-19 PASS a second
- 2026-01-20 PASS a second
- 2026-01-21 PASS a second
- 2026-01-22

### Error 2026-01-22T00:36:27+00:00
```
2026-01-22T00:36:27.9542425Z === RUN   TestAccProjectAPIKey_invalidRole
2026-01-22T00:36:27.9545595Z === CONT  TestAccProjectAPIKey_invalidRole
2026-01-22T00:36:27.9562240Z === NAME  TestAccProjectAPIKey_invalidRole
2026-01-22T00:36:27.9563020Z     resource_project_api_key_test.go:241: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-22T00:36:27.9563583Z         
2026-01-22T00:36:27.9565558Z         Error: https://cloud-dev.mongodb.com/api/atlas/v2/groups/697170a1e11aa161979aab98/apiKeys POST: HTTP 400 Bad Request (Error code: "BAD_REQUEST") Detail: The request content produced validation errors. Reason: Bad Request. Params: [], BadRequestDetail: {"fields":[{"description":"Invalid role name 'INVALID_ROLE'. Must be a valid Role name.","field":"_roles"}]}
2026-01-22T00:36:27.9566916Z         
2026-01-22T00:36:27.9567247Z           with mongodbatlas_project_api_key.test,
2026-01-22T00:36:27.9568044Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2026-01-22T00:36:27.9568686Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2026-01-22T00:36:27.9569017Z         
2026-01-22T00:36:27.9569265Z --- FAIL: TestAccProjectAPIKey_invalidRole (1.33s)
```

- 2026-01-23
  - FAIL a second

### Error 2026-01-23T00:35:38+00:00
```
2026-01-23T00:35:38.7211397Z === RUN   TestAccProjectAPIKey_invalidRole
2026-01-23T00:35:38.7214652Z === CONT  TestAccProjectAPIKey_invalidRole
2026-01-23T00:35:38.7231658Z === NAME  TestAccProjectAPIKey_invalidRole
2026-01-23T00:35:38.7232467Z     resource_project_api_key_test.go:241: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-23T00:35:38.7233044Z         
2026-01-23T00:35:38.7235484Z         Error: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6972c1f5f453a429f01aa0f0/apiKeys POST: HTTP 400 Bad Request (Error code: "BAD_REQUEST") Detail: The request content produced validation errors. Reason: Bad Request. Params: [], BadRequestDetail: {"fields":[{"description":"Invalid role name 'INVALID_ROLE'. Must be a valid Role name.","field":"_roles"}]}
2026-01-23T00:35:38.7236980Z         
2026-01-23T00:35:38.7237378Z           with mongodbatlas_project_api_key.test,
2026-01-23T00:35:38.7238163Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2026-01-23T00:35:38.7238872Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2026-01-23T00:35:38.7239201Z         
2026-01-23T00:35:38.7240015Z --- FAIL: TestAccProjectAPIKey_invalidRole (1.43s)
```

  - PASS a second
- 2026-01-24 PASS a second
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

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-01-25 00:38](#error-2026-01-25t0038290000) | INVALID_ENUM_VALUE /api/atlas/v2/groups/69756599bc688ddf1edb5bef/apiKeys | qa | 1.07s
[2026-02-01 00:46](#error-2026-02-01t0046020000) | INVALID_ENUM_VALUE /api/atlas/v2/groups/697ea1e6d7b482da407ca1b5/apiKeys | qa | 1.05s
[2026-02-04 11:14](#error-2026-02-04t1114400000) | INVALID_ENUM_VALUE /api/atlas/v2/groups/698329c0a401dc0c65b74a0a/apiKeys | qa | 1.04s
[2026-02-04 12:32](#error-2026-02-04t1232030000) | INVALID_ENUM_VALUE /api/atlas/v2/groups/69833bde86f384157d53e337/apiKeys | qa | 1.04s
[2026-02-04 13:28](#error-2026-02-04t1328450000) | INVALID_ENUM_VALUE /api/atlas/v2/groups/698349227765c5c3290bf50e/apiKeys | qa | 1.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS a second
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS a second
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS a second
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS a second
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25

### Error 2026-01-25T00:38:29+00:00
```
2026-01-25T00:38:29.3028887Z === RUN   TestAccProjectAPIKey_invalidRole
2026-01-25T00:38:29.3030543Z === CONT  TestAccProjectAPIKey_invalidRole
2026-01-25T00:38:29.3047657Z === NAME  TestAccProjectAPIKey_invalidRole
2026-01-25T00:38:29.3048380Z     resource_project_api_key_test.go:241: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-25T00:38:29.3048933Z         
2026-01-25T00:38:29.3050440Z         Error: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69756599bc688ddf1edb5bef/apiKeys POST: HTTP 400 Bad Request (Error code: "INVALID_ENUM_VALUE") Detail: An invalid enumeration value INVALID_ROLE was specified. Reason: Bad Request. Params: [INVALID_ROLE], BadRequestDetail: 
2026-01-25T00:38:29.3051725Z         
2026-01-25T00:38:29.3052054Z           with mongodbatlas_project_api_key.test,
2026-01-25T00:38:29.3052714Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2026-01-25T00:38:29.3053339Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2026-01-25T00:38:29.3053656Z         
2026-01-25T00:38:29.3053907Z --- FAIL: TestAccProjectAPIKey_invalidRole (1.66s)
```

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
