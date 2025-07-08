# config/rolesorgid/TestAccConfigDSOrgID_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 3 seconds
```
2025-07-01T08:35:29.4730720Z === RUN   TestAccConfigDSOrgID_basic
2025-07-01T08:35:29.4731681Z === CONT  TestAccConfigDSOrgID_basic
2025-07-01T08:35:29.4732175Z --- PASS: TestAccConfigDSOrgID_basic (3.00s)
```
### 2025-07-02
#### PASS 2 seconds
```
2025-07-02T00:30:40.8711319Z === RUN   TestAccConfigDSOrgID_basic
2025-07-02T00:30:40.8711878Z === CONT  TestAccConfigDSOrgID_basic
2025-07-02T00:30:40.8712167Z --- PASS: TestAccConfigDSOrgID_basic (2.22s)
```
### 2025-07-03
#### PASS a second
```
2025-07-03T00:31:32.1189871Z === RUN   TestAccConfigDSOrgID_basic
2025-07-03T00:31:32.1190516Z === CONT  TestAccConfigDSOrgID_basic
2025-07-03T00:31:32.1190856Z --- PASS: TestAccConfigDSOrgID_basic (1.22s)
```
### 2025-07-04
#### PASS a second
```
2025-07-04T00:30:47.2551520Z === RUN   TestAccConfigDSOrgID_basic
2025-07-04T00:30:47.2552382Z === CONT  TestAccConfigDSOrgID_basic
2025-07-04T00:30:47.2552831Z --- PASS: TestAccConfigDSOrgID_basic (1.27s)
```
### 2025-07-05
#### PASS a second
```
2025-07-05T00:30:14.7966117Z === RUN   TestAccConfigDSOrgID_basic
2025-07-05T00:30:14.7966678Z === CONT  TestAccConfigDSOrgID_basic
2025-07-05T00:30:14.7966971Z --- PASS: TestAccConfigDSOrgID_basic (1.42s)
```
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
```
2025-07-07T00:33:18.3757096Z === RUN   TestAccConfigDSOrgID_basic
2025-07-07T00:33:18.3758340Z === CONT  TestAccConfigDSOrgID_basic
2025-07-07T00:33:18.3759617Z --- PASS: TestAccConfigDSOrgID_basic (1.39s)
```
### 2025-07-08
#### PASS a second
```
2025-07-08T00:31:37.4428470Z === RUN   TestAccConfigDSOrgID_basic
2025-07-08T00:31:37.4429501Z === CONT  TestAccConfigDSOrgID_basic
2025-07-08T00:31:37.4430173Z --- PASS: TestAccConfigDSOrgID_basic (1.59s)
```