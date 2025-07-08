# config/rolesorgid/TestAccConfigDSOrgID_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 2 seconds
### 2025-07-03
#### PASS a second
### 2025-07-04
#### PASS a second
### 2025-07-05
#### PASS a second
### 2025-07-06
#### FAIL a moment
```
2025-07-06T00:34:00.3054733Z === RUN   TestAccConfigDSOrgID_basic
2025-07-06T00:34:00.3055844Z === CONT  TestAccConfigDSOrgID_basic
2025-07-06T00:34:00.3069027Z    test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/f4a4173d-86e1-4089-95dd-38ad7426626e/terraform
2025-07-06T00:34:00.3070401Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-06T00:34:00.3071076Z         
2025-07-06T00:34:00.3072280Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-07-06T00:34:00.3073190Z         
2025-07-06T00:34:00.3073766Z           with data.mongodbatlas_roles_org_id.test,
2025-07-06T00:34:00.3074838Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-07-06T00:34:00.3075947Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-07-06T00:34:00.3076444Z         
2025-07-06T00:34:00.3076829Z --- FAIL: TestAccConfigDSOrgID_basic (0.32s)
```
### 2025-07-07
#### PASS a second
### 2025-07-08
#### PASS a second