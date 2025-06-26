# config/rolesorgid/TestAccConfigDSOrgID_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS a second
```
2025-06-20T00:31:00.4563737Z === RUN   TestAccConfigDSOrgID_basic
2025-06-20T00:31:00.4564733Z === CONT  TestAccConfigDSOrgID_basic
2025-06-20T00:31:00.4565479Z --- PASS: TestAccConfigDSOrgID_basic (1.37s)
```
### 2025-06-21
#### PASS a second
```
2025-06-21T00:30:24.1528250Z === RUN   TestAccConfigDSOrgID_basic
2025-06-21T00:30:24.1529240Z === CONT  TestAccConfigDSOrgID_basic
2025-06-21T00:30:24.1529724Z --- PASS: TestAccConfigDSOrgID_basic (1.13s)
```
### 2025-06-22
#### FAIL a moment
```
2025-06-22T00:33:39.4135680Z === RUN   TestAccConfigDSOrgID_basic
2025-06-22T00:33:39.4136728Z === CONT  TestAccConfigDSOrgID_basic
2025-06-22T00:33:39.4171329Z    test_terraform_path=/home/runner/work/_temp/deff8d4d-a237-4a7d-b7cc-d8fd6946c8bb/terraform test_working_directory=/tmp/plugintest3782071924
2025-06-22T00:33:39.4173097Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-06-22T00:33:39.4174320Z         
2025-06-22T00:33:39.4175994Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-06-22T00:33:39.4177119Z         
2025-06-22T00:33:39.4177879Z           with data.mongodbatlas_roles_org_id.test,
2025-06-22T00:33:39.4179134Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-06-22T00:33:39.4180205Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-06-22T00:33:39.4181450Z         
2025-06-22T00:33:39.4182134Z --- FAIL: TestAccConfigDSOrgID_basic (0.48s)
```
### 2025-06-23
#### PASS a second
```
2025-06-23T00:33:10.6582902Z === RUN   TestAccConfigDSOrgID_basic
2025-06-23T00:33:10.6583465Z === CONT  TestAccConfigDSOrgID_basic
2025-06-23T00:33:10.6583756Z --- PASS: TestAccConfigDSOrgID_basic (1.41s)
```
### 2025-06-24
#### PASS a second
```
2025-06-24T00:30:45.8971125Z === RUN   TestAccConfigDSOrgID_basic
2025-06-24T00:30:45.8972063Z === CONT  TestAccConfigDSOrgID_basic
2025-06-24T00:30:45.8972548Z --- PASS: TestAccConfigDSOrgID_basic (1.66s)
```
### 2025-06-25
#### PASS a second
```
2025-06-25T00:31:06.5907450Z === RUN   TestAccConfigDSOrgID_basic
2025-06-25T00:31:06.5908380Z === CONT  TestAccConfigDSOrgID_basic
2025-06-25T00:31:06.5908874Z --- PASS: TestAccConfigDSOrgID_basic (1.91s)
```
### 2025-06-26
#### PASS a second
```
2025-06-26T00:31:01.9605432Z === RUN   TestAccConfigDSOrgID_basic
2025-06-26T00:31:01.9606075Z === CONT  TestAccConfigDSOrgID_basic
2025-06-26T00:31:01.9606408Z --- PASS: TestAccConfigDSOrgID_basic (1.24s)
```