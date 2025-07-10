# config/projectapikey/TestAccProjectAPIKey_updateDescription Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 104) FAIL(x 11)
Success rate: 90.43%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029570000) |  | qa | 0.00s
[2025-05-18 00:31](#error-2025-05-18t0031580000) |  | qa | 2.04s
[2025-05-25 00:32](#error-2025-05-25t0032550000) |  | qa | 2.07s
[2025-05-28 08:38](#error-2025-05-28t0838430000) |  | qa | 2.06s
[2025-05-28 12:23](#error-2025-05-28t1223270000) |  | qa | 2.09s
[2025-06-08 00:33](#error-2025-06-08t0033530000) |  | qa | 2.03s
[2025-06-11 07:39](#error-2025-06-11t0739050000) |  | qa | 2.01s
[2025-06-15 00:33](#error-2025-06-15t0033430000) |  | qa | 2.09s
[2025-06-22 00:33](#error-2025-06-22t0033390000) |  | qa | 1.08s
[2025-06-29 00:34](#error-2025-06-29t0034190000) |  | qa | 1.09s
[2025-07-06 00:34](#error-2025-07-06t0034000000) |  | qa | 2.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 11 seconds
- 2025-04-13 PASS 11 seconds
- 2025-04-14 PASS 11 seconds
- 2025-04-15 PASS 12 seconds
- 2025-04-16
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-04-17 PASS 10 seconds
- 2025-04-18 PASS 11 seconds
- 2025-04-19 PASS 16 seconds
- 2025-04-20 PASS 12 seconds
- 2025-04-21 PASS 23 seconds
- 2025-04-22 PASS 11 seconds
- 2025-04-23 PASS 10 seconds
- 2025-04-24 PASS 19 seconds
- 2025-04-25 PASS 11 seconds
- 2025-04-26 PASS 21 seconds
- 2025-04-27 PASS 23 seconds
- 2025-04-28 PASS 22 seconds
- 2025-04-29 PASS 12 seconds
- 2025-04-30
  - PASS 10 seconds
  - PASS 11 seconds
- 2025-05-01
  - PASS 12 seconds
  - PASS 21 seconds
  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 11 seconds
  - PASS 22 seconds
  - PASS 13 seconds
- 2025-05-02 PASS 20 seconds
- 2025-05-03 PASS 12 seconds
- 2025-05-04 PASS 10 seconds
- 2025-05-05 PASS 22 seconds
- 2025-05-06 PASS 11 seconds
- 2025-05-07 PASS 11 seconds
- 2025-05-08 PASS 11 seconds
- 2025-05-09 PASS 23 seconds
- 2025-05-10 PASS 11 seconds
- 2025-05-11

### Error 2025-05-11T00:29:57+00:00
```
2025-05-11T00:29:57.2088122Z === RUN   TestAccProjectAPIKey_updateDescription
2025-05-11T00:29:57.2089250Z     resource_project_api_key_test.go:90: Creating execution project: test-acc-tf-p-8601690116237439681
2025-05-11T00:29:57.2090224Z     resource_project_api_key_test.go:90: 
2025-05-11T00:29:57.2092125Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:57.2095350Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:57.2099033Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:90
2025-05-11T00:29:57.2100526Z         	Error:      	Received unexpected error:
2025-05-11T00:29:57.2102537Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2103637Z         	Test:       	TestAccProjectAPIKey_updateDescription
2025-05-11T00:29:57.2105626Z         	Messages:   	Project creation failed: test-acc-tf-p-8601690116237439681, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:57.2106981Z --- FAIL: TestAccProjectAPIKey_updateDescription (0.01s)
```

- 2025-05-12 PASS 10 seconds
- 2025-05-13
  - PASS 21 seconds
  - PASS 10 seconds
- 2025-05-14 PASS 10 seconds
- 2025-05-15 PASS 16 seconds
- 2025-05-16 PASS 21 seconds
- 2025-05-17 PASS 10 seconds
- 2025-05-18

### Error 2025-05-18T00:31:58+00:00
```
2025-05-18T00:31:58.1244771Z === RUN   TestAccProjectAPIKey_updateDescription
2025-05-18T00:31:58.1256054Z === CONT  TestAccProjectAPIKey_updateDescription
2025-05-18T00:31:58.1386873Z === NAME  TestAccProjectAPIKey_updateDescription
2025-05-18T00:31:58.1389615Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-05-18T00:31:58.1390590Z         
2025-05-18T00:31:58.1391549Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1392490Z         
2025-05-18T00:31:58.1393078Z           with mongodbatlas_project_api_key.test,
2025-05-18T00:31:58.1394393Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-18T00:31:58.1395656Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-18T00:31:58.1396221Z         
2025-05-18T00:31:58.1411287Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-18T00:31:58.1412326Z         
2025-05-18T00:31:58.1413486Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-18T00:31:58.1414244Z         
2025-05-18T00:31:58.1414917Z --- FAIL: TestAccProjectAPIKey_updateDescription (2.39s)
```

- 2025-05-19 PASS 11 seconds
- 2025-05-20 PASS 11 seconds
- 2025-05-21 PASS 10 seconds
- 2025-05-22 PASS 10 seconds
- 2025-05-23 PASS 11 seconds
- 2025-05-24 PASS 13 seconds
- 2025-05-25

### Error 2025-05-25T00:32:55+00:00
```
2025-05-25T00:32:55.4727437Z === RUN   TestAccProjectAPIKey_updateDescription
2025-05-25T00:32:55.4737383Z === CONT  TestAccProjectAPIKey_updateDescription
2025-05-25T00:32:55.4845163Z === NAME  TestAccProjectAPIKey_updateDescription
2025-05-25T00:32:55.4846221Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-05-25T00:32:55.4847600Z         
2025-05-25T00:32:55.4848802Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.4849843Z         
2025-05-25T00:32:55.4850473Z           with mongodbatlas_project_api_key.test,
2025-05-25T00:32:55.4851887Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-25T00:32:55.4853170Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-25T00:32:55.4853743Z         
2025-05-25T00:32:55.5079723Z === NAME  TestAccProjectAPIKey_updateDescription
2025-05-25T00:32:55.5080798Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-25T00:32:55.5081580Z         
2025-05-25T00:32:55.5082534Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-25T00:32:55.5083304Z         
2025-05-25T00:32:55.5083774Z --- FAIL: TestAccProjectAPIKey_updateDescription (2.71s)
```

- 2025-05-26 PASS 12 seconds
- 2025-05-27 PASS 13 seconds
- 2025-05-28
  - PASS 23 seconds
  - FAIL 2 seconds

### Error 2025-05-28T08:38:43+00:00
```
2025-05-28T08:38:43.8249584Z === RUN   TestAccProjectAPIKey_updateDescription
2025-05-28T08:38:43.8259342Z === CONT  TestAccProjectAPIKey_updateDescription
2025-05-28T08:38:43.8405712Z === NAME  TestAccProjectAPIKey_updateDescription
2025-05-28T08:38:43.8406789Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-05-28T08:38:43.8407542Z         
2025-05-28T08:38:43.8408546Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8409321Z         
2025-05-28T08:38:43.8410080Z           with mongodbatlas_project_api_key.test,
2025-05-28T08:38:43.8411713Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T08:38:43.8412902Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T08:38:43.8413483Z         
2025-05-28T08:38:43.8427154Z    test_name=TestAccProjectAPIKey_basic test_terraform_path=/home/runner/work/_temp/54bb752c-9b08-4ca0-b57c-ab3e18fcddc5/terraform
2025-05-28T08:38:43.8522594Z === NAME  TestAccProjectAPIKey_updateDescription
2025-05-28T08:38:43.8523695Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T08:38:43.8524486Z         
2025-05-28T08:38:43.8525448Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T08:38:43.8526217Z         
2025-05-28T08:38:43.8526714Z --- FAIL: TestAccProjectAPIKey_updateDescription (2.59s)
```

  - FAIL 2 seconds

### Error 2025-05-28T12:23:27+00:00
```
2025-05-28T12:23:27.4977023Z === RUN   TestAccProjectAPIKey_updateDescription
2025-05-28T12:23:27.4986831Z === CONT  TestAccProjectAPIKey_updateDescription
2025-05-28T12:23:27.5066387Z === NAME  TestAccProjectAPIKey_updateDescription
2025-05-28T12:23:27.5066957Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-05-28T12:23:27.5067372Z         
2025-05-28T12:23:27.5067896Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5068314Z         
2025-05-28T12:23:27.5068651Z           with mongodbatlas_project_api_key.test,
2025-05-28T12:23:27.5069469Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-05-28T12:23:27.5070070Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-05-28T12:23:27.5070393Z         
2025-05-28T12:23:27.5097857Z === NAME  TestAccProjectAPIKey_updateDescription
2025-05-28T12:23:27.5098474Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T12:23:27.5099113Z         
2025-05-28T12:23:27.5099646Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-28T12:23:27.5100081Z         
2025-05-28T12:23:27.5100372Z --- FAIL: TestAccProjectAPIKey_updateDescription (2.88s)
```

- 2025-05-29 PASS 14 seconds
- 2025-05-30 PASS 17 seconds
- 2025-05-31 PASS 21 seconds
- 2025-06-01
  - PASS 11 seconds
  - PASS 11 seconds
  - PASS 12 seconds
  - PASS 17 seconds
  - PASS 17 seconds
  - PASS 12 seconds
- 2025-06-02
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 22 seconds
- 2025-06-03 PASS 17 seconds
- 2025-06-04 PASS 17 seconds
- 2025-06-05 PASS 21 seconds
- 2025-06-06 PASS 12 seconds
- 2025-06-07 PASS 23 seconds
- 2025-06-08

### Error 2025-06-08T00:33:53+00:00
```
2025-06-08T00:33:53.1357601Z === RUN   TestAccProjectAPIKey_updateDescription
2025-06-08T00:33:53.1406527Z === CONT  TestAccProjectAPIKey_updateDescription
2025-06-08T00:33:53.1519340Z === NAME  TestAccProjectAPIKey_updateDescription
2025-06-08T00:33:53.1520332Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-06-08T00:33:53.1521088Z         
2025-06-08T00:33:53.1522034Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1522929Z         
2025-06-08T00:33:53.1523518Z           with mongodbatlas_project_api_key.test,
2025-06-08T00:33:53.1524687Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-08T00:33:53.1525753Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-08T00:33:53.1526319Z         
2025-06-08T00:33:53.1540031Z    test_name=TestAccProjectAPIKey_recreateWhenDeletedExternally test_terraform_path=/home/runner/work/_temp/13e22bf6-18d3-4285-87a0-815735aa0ae0/terraform test_working_directory=/tmp/plugintest3627468615 test_step_number=1
2025-06-08T00:33:53.1641451Z === NAME  TestAccProjectAPIKey_updateDescription
2025-06-08T00:33:53.1642764Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-08T00:33:53.1643587Z         
2025-06-08T00:33:53.1644567Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-08T00:33:53.1645336Z         
2025-06-08T00:33:53.1645829Z --- FAIL: TestAccProjectAPIKey_updateDescription (2.31s)
```

- 2025-06-09 PASS 11 seconds
- 2025-06-10 PASS 23 seconds
- 2025-06-11
  - PASS 23 seconds
  - FAIL 2 seconds

### Error 2025-06-11T07:39:05+00:00
```
2025-06-11T07:39:05.1193831Z === RUN   TestAccProjectAPIKey_updateDescription
2025-06-11T07:39:05.1199189Z === CONT  TestAccProjectAPIKey_updateDescription
2025-06-11T07:39:05.1212161Z === NAME  TestAccProjectAPIKey_updateDescription
2025-06-11T07:39:05.1212716Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-06-11T07:39:05.1213126Z         
2025-06-11T07:39:05.1213638Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1214155Z         
2025-06-11T07:39:05.1214478Z           with mongodbatlas_project_api_key.test,
2025-06-11T07:39:05.1215107Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-11T07:39:05.1215694Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-11T07:39:05.1215998Z         
2025-06-11T07:39:05.1263934Z === NAME  TestAccProjectAPIKey_updateDescription
2025-06-11T07:39:05.1264723Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-11T07:39:05.1265281Z         
2025-06-11T07:39:05.1265795Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-11T07:39:05.1266204Z         
2025-06-11T07:39:05.1266513Z --- FAIL: TestAccProjectAPIKey_updateDescription (2.14s)
```

- 2025-06-12 PASS 11 seconds
- 2025-06-13 PASS 11 seconds
- 2025-06-14 PASS 13 seconds
- 2025-06-15

### Error 2025-06-15T00:33:43+00:00
```
2025-06-15T00:33:43.1540987Z === RUN   TestAccProjectAPIKey_updateDescription
2025-06-15T00:33:43.1549659Z === CONT  TestAccProjectAPIKey_updateDescription
2025-06-15T00:33:43.1660737Z === NAME  TestAccProjectAPIKey_updateDescription
2025-06-15T00:33:43.1661763Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-06-15T00:33:43.1662484Z         
2025-06-15T00:33:43.1663428Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1664145Z         
2025-06-15T00:33:43.1664718Z           with mongodbatlas_project_api_key.test,
2025-06-15T00:33:43.1665878Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-15T00:33:43.1667472Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-15T00:33:43.1668581Z         
2025-06-15T00:33:43.1731583Z === NAME  TestAccProjectAPIKey_updateDescription
2025-06-15T00:33:43.1732680Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-15T00:33:43.1733454Z         
2025-06-15T00:33:43.1734435Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-15T00:33:43.1735174Z         
2025-06-15T00:33:43.1735642Z --- FAIL: TestAccProjectAPIKey_updateDescription (2.94s)
```

- 2025-06-16 PASS 23 seconds
- 2025-06-17 PASS 24 seconds
- 2025-06-18
  - PASS 11 seconds
  - PASS 10 seconds
- 2025-06-19 PASS 11 seconds
- 2025-06-20 PASS 24 seconds
- 2025-06-21 PASS 11 seconds
- 2025-06-22

### Error 2025-06-22T00:33:39+00:00
```
2025-06-22T00:33:39.3830751Z === RUN   TestAccProjectAPIKey_updateDescription
2025-06-22T00:33:39.3841217Z === CONT  TestAccProjectAPIKey_updateDescription
2025-06-22T00:33:39.3872625Z === NAME  TestAccProjectAPIKey_updateDescription
2025-06-22T00:33:39.3873579Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-06-22T00:33:39.3874511Z         
2025-06-22T00:33:39.3875454Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3876178Z         
2025-06-22T00:33:39.3876742Z           with mongodbatlas_project_api_key.test,
2025-06-22T00:33:39.3877872Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-22T00:33:39.3878916Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-22T00:33:39.3879443Z         
2025-06-22T00:33:39.3955899Z === NAME  TestAccProjectAPIKey_updateDescription
2025-06-22T00:33:39.3956915Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-22T00:33:39.3957664Z         
2025-06-22T00:33:39.3958582Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-22T00:33:39.3959304Z         
2025-06-22T00:33:39.3959751Z --- FAIL: TestAccProjectAPIKey_updateDescription (1.78s)
```

- 2025-06-23 PASS 23 seconds
- 2025-06-24 PASS 14 seconds
- 2025-06-25 PASS 14 seconds
- 2025-06-26 PASS 13 seconds
- 2025-06-27 PASS 23 seconds
- 2025-06-28 PASS 11 seconds
- 2025-06-29

### Error 2025-06-29T00:34:19+00:00
```
2025-06-29T00:34:19.1728714Z === RUN   TestAccProjectAPIKey_updateDescription
2025-06-29T00:34:19.1733748Z === CONT  TestAccProjectAPIKey_updateDescription
2025-06-29T00:34:19.1762952Z === NAME  TestAccProjectAPIKey_updateDescription
2025-06-29T00:34:19.1763491Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-06-29T00:34:19.1763892Z         
2025-06-29T00:34:19.1764397Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-29T00:34:19.1764807Z         
2025-06-29T00:34:19.1765130Z           with mongodbatlas_project_api_key.test,
2025-06-29T00:34:19.1765866Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-06-29T00:34:19.1766452Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-06-29T00:34:19.1766756Z         
2025-06-29T00:34:19.1831503Z === NAME  TestAccProjectAPIKey_updateDescription
2025-06-29T00:34:19.1832079Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-29T00:34:19.1832629Z         
2025-06-29T00:34:19.1833252Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-06-29T00:34:19.1833663Z         
2025-06-29T00:34:19.1834033Z --- FAIL: TestAccProjectAPIKey_updateDescription (1.94s)
```

- 2025-06-30 PASS 17 seconds
- 2025-07-01
  - PASS 11 seconds
  - PASS 14 seconds
  - PASS 23 seconds
  - PASS 11 seconds
  - PASS 24 seconds
  - PASS 12 seconds
- 2025-07-02 PASS 12 seconds
- 2025-07-03 PASS 21 seconds
- 2025-07-04 PASS 14 seconds
- 2025-07-05 PASS 24 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
```
2025-07-06T00:34:00.2824171Z === RUN   TestAccProjectAPIKey_updateDescription
2025-07-06T00:34:00.2828726Z === CONT  TestAccProjectAPIKey_updateDescription
2025-07-06T00:34:00.2884885Z === NAME  TestAccProjectAPIKey_updateDescription
2025-07-06T00:34:00.2885530Z     resource_project_api_key_test.go:95: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2885930Z         
2025-07-06T00:34:00.2886429Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2886830Z         
2025-07-06T00:34:00.2887139Z           with mongodbatlas_project_api_key.test,
2025-07-06T00:34:00.2887754Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project_api_key" "test":
2025-07-06T00:34:00.2888317Z           12: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-06T00:34:00.2888609Z         
2025-07-06T00:34:00.2945811Z === NAME  TestAccProjectAPIKey_updateDescription
2025-07-06T00:34:00.2946828Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:34:00.2947540Z         
2025-07-06T00:34:00.2948431Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2949106Z         
2025-07-06T00:34:00.2949542Z --- FAIL: TestAccProjectAPIKey_updateDescription (2.78s)
```

- 2025-07-07 PASS 11 seconds
- 2025-07-08 PASS 24 seconds
- 2025-07-09 PASS 24 seconds
- 2025-07-10 PASS 11 seconds