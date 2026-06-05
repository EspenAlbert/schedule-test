# autogen_slow/searchdeploymentapi/TestAccSearchDeploymentAPI_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 18) FAIL(x 13)
Success rate: 58.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 02:45](#error-2026-05-07t0245370000) |  | dev | timeout | 6569.02s
[2026-05-09 01:02](#error-2026-05-09t0102470000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.09s
[2026-05-12 01:24](#error-2026-05-12t0124120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.01s
[2026-05-13 02:03](#error-2026-05-13t0203520000) |  | dev | timeout | 3932.02s
[2026-05-14 01:49](#error-2026-05-14t0149220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.08s
[2026-05-15 01:15](#error-2026-05-15t0115530000) |  | dev |  | 223.09s
[2026-05-19 01:06](#error-2026-05-19t0106130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.04s
[2026-05-21 01:27](#error-2026-05-21t0127270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.07s
[2026-05-22 02:31](#error-2026-05-22t0231130000) |  | dev | timeout | 5399.03s
[2026-05-23 01:35](#error-2026-05-23t0135220000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.09s
[2026-05-27 02:48](#error-2026-05-27t0248380000) |  | dev | timeout | 6297.09s
[2026-06-02 01:14](#error-2026-06-02t0114070000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.08s
[2026-06-03 02:44](#error-2026-06-03t0244390000) |  | dev | timeout | 5344.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL an hour

### Error 2026-05-07T02:45:37+00:00
```
2026-05-07T02:45:37.2027512Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-07T02:45:37.2028902Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-07T02:45:37.2038951Z   
2026-05-07T02:45:37.2039389Z     resource_test.go:26: Step 2/3 error: Error running apply: exit status 1
2026-05-07T02:45:37.2039787Z         
2026-05-07T02:45:37.2040112Z         Error: Error waiting for changes in Update
2026-05-07T02:45:37.2040654Z         
2026-05-07T02:45:37.2041035Z           with mongodbatlas_search_deployment_api.test,
2026-05-07T02:45:37.2041779Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-05-07T02:45:37.2042478Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-05-07T02:45:37.2042817Z         
2026-05-07T02:45:37.2043262Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-05-07T02:45:37.2043692Z         timeout: 30m0s)
2026-05-07T02:45:37.2050957Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/60ad72c1-71f0-4eec-9fb6-936e87162a23/terraform test_working_directory=/tmp/plugintest2106511673
2026-05-07T02:45:37.2052035Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-07T02:45:37.2052493Z         
2026-05-07T02:45:37.2052813Z         Error: Error waiting for changes in Delete
2026-05-07T02:45:37.2053111Z         
2026-05-07T02:45:37.2053721Z         timeout while waiting for state to become 'DELETED' (last state: 'UPDATING',
2026-05-07T02:45:37.2054159Z         timeout: 10m0s)
2026-05-07T02:45:37.2054458Z --- FAIL: TestAccSearchDeploymentAPI_basic (6569.23s)
```

  - PASS an hour
- 2026-05-08 PASS an hour
- 2026-05-09

### Error 2026-05-09T01:02:47+00:00
```
2026-05-09T01:02:47.9558200Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-09T01:02:47.9558837Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-09T01:02:47.9569727Z   
2026-05-09T01:02:47.9570130Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-09T01:02:47.9570508Z         
2026-05-09T01:02:47.9570933Z         Error: error creating project: test-acc-tf-p-438548902839699317
2026-05-09T01:02:47.9571481Z         
2026-05-09T01:02:47.9571793Z           with mongodbatlas_project.test,
2026-05-09T01:02:47.9572410Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-09T01:02:47.9572984Z           13: 	resource "mongodbatlas_project" "test" {
2026-05-09T01:02:47.9573288Z         
2026-05-09T01:02:47.9573757Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:02:47.9574559Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:02:47.9575160Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:02:47.9575583Z --- FAIL: TestAccSearchDeploymentAPI_basic (66.90s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS an hour
- 2026-05-12

### Error 2026-05-12T01:24:12+00:00
```
2026-05-12T01:24:12.2097016Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-12T01:24:12.2097679Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-12T01:24:12.2108624Z    test_terraform_path=/home/runner/work/_temp/76bd7d0c-0d69-4fad-87bd-5e5a46b1720b/terraform
2026-05-12T01:24:12.2109272Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-12T01:24:12.2109652Z         
2026-05-12T01:24:12.2110076Z         Error: error creating project: test-acc-tf-p-2088536316213637984
2026-05-12T01:24:12.2110445Z         
2026-05-12T01:24:12.2110751Z           with mongodbatlas_project.test,
2026-05-12T01:24:12.2111609Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-12T01:24:12.2112196Z           13: 	resource "mongodbatlas_project" "test" {
2026-05-12T01:24:12.2112512Z         
2026-05-12T01:24:12.2112987Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-12T01:24:12.2113643Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-12T01:24:12.2114248Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T01:24:12.2114666Z --- FAIL: TestAccSearchDeploymentAPI_basic (94.10s)
```

- 2026-05-13

### Error 2026-05-13T02:03:52+00:00
```
2026-05-13T02:03:52.5469219Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-13T02:03:52.5470368Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-13T02:03:52.5489200Z   
2026-05-13T02:03:52.5489916Z     resource_test.go:26: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-13T02:03:52.5490434Z         
2026-05-13T02:03:52.5490782Z         Error: Error waiting for changes in Delete
2026-05-13T02:03:52.5491090Z         
2026-05-13T02:03:52.5491566Z         timeout while waiting for state to become 'DELETED' (last state: 'UPDATING',
2026-05-13T02:03:52.5492036Z         timeout: 10m0s)
2026-05-13T02:03:52.5492345Z --- FAIL: TestAccSearchDeploymentAPI_basic (3932.24s)
```

- 2026-05-14

### Error 2026-05-14T01:49:22+00:00
```
2026-05-14T01:49:22.3484742Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-14T01:49:22.3485372Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-14T01:49:22.3496184Z   
2026-05-14T01:49:22.3496580Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-14T01:49:22.3496953Z         
2026-05-14T01:49:22.3497383Z         Error: error creating project: test-acc-tf-p-6212231627069983105
2026-05-14T01:49:22.3497741Z         
2026-05-14T01:49:22.3498058Z           with mongodbatlas_project.test,
2026-05-14T01:49:22.3498666Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-14T01:49:22.3499499Z           13: 	resource "mongodbatlas_project" "test" {
2026-05-14T01:49:22.3499970Z         
2026-05-14T01:49:22.3500710Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-14T01:49:22.3501599Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-14T01:49:22.3502190Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:49:22.3502607Z --- FAIL: TestAccSearchDeploymentAPI_basic (65.76s)
```

- 2026-05-15

### Error 2026-05-15T01:15:53+00:00
```
2026-05-15T01:15:53.3643857Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-15T01:15:53.3644513Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-15T01:15:53.3657015Z    test_working_directory=/tmp/plugintest2552776123
2026-05-15T01:15:53.3657545Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-15T01:15:53.3657930Z         
2026-05-15T01:15:53.3658188Z         Error: Error in create
2026-05-15T01:15:53.3658441Z         
2026-05-15T01:15:53.3658776Z           with mongodbatlas_advanced_cluster.test,
2026-05-15T01:15:53.3659468Z           on terraform_plugin_test.tf line 17, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-15T01:15:53.3660110Z           17: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-05-15T01:15:53.3660437Z         
2026-05-15T01:15:53.3660942Z         cluster=test-acc-tf-c-5928312775519289888 didn't reach desired state: IDLE,
2026-05-15T01:15:53.3661367Z         error:
2026-05-15T01:15:53.3662109Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f76bf5881c97de6b89d/clusters/test-acc-tf-c-5928312775519289888
2026-05-15T01:15:53.3662935Z         GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-15T01:15:53.3663364Z         BadRequestDetail: 
2026-05-15T01:15:53.3672976Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/a654072e-e8fd-41fd-bce5-b95806a8701f/terraform test_working_directory=/tmp/plugintest2552776123 test_step_number=1
2026-05-15T01:15:53.3674132Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-05-15T01:15:53.3674594Z         
2026-05-15T01:15:53.3674906Z         Error: error when destroying resource
2026-05-15T01:15:53.3675191Z         
2026-05-15T01:15:53.3675541Z         error deleting project (6a066f76bf5881c97de6b89d):
2026-05-15T01:15:53.3676140Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f76bf5881c97de6b89d
2026-05-15T01:15:53.3677147Z         DELETE: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [],
2026-05-15T01:15:53.3677594Z         BadRequestDetail: 
2026-05-15T01:15:53.3677902Z --- FAIL: TestAccSearchDeploymentAPI_basic (223.92s)
```

- 2026-05-16 PASS 43 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS an hour
- 2026-05-19

### Error 2026-05-19T01:06:13+00:00
```
2026-05-19T01:06:13.4589289Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-19T01:06:13.4589811Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-19T01:06:13.4598300Z    test_terraform_path=/home/runner/work/_temp/9bd9076d-51eb-4e90-b891-c8899924ca32/terraform test_working_directory=/tmp/plugintest3120256558 test_step_number=1 test_name=TestAccSearchDeploymentAPI_basic
2026-05-19T01:06:13.4599090Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-19T01:06:13.4599395Z         
2026-05-19T01:06:13.4599728Z         Error: error creating project: test-acc-tf-p-376729784014644220
2026-05-19T01:06:13.4600011Z         
2026-05-19T01:06:13.4600254Z           with mongodbatlas_project.test,
2026-05-19T01:06:13.4600732Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-19T01:06:13.4601307Z           13: 	resource "mongodbatlas_project" "test" {
2026-05-19T01:06:13.4601553Z         
2026-05-19T01:06:13.4601925Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:06:13.4602439Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:06:13.4602902Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:06:13.4603234Z --- FAIL: TestAccSearchDeploymentAPI_basic (85.43s)
```

- 2026-05-20 PASS an hour
- 2026-05-21

### Error 2026-05-21T01:27:27+00:00
```
2026-05-21T01:27:27.5768403Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-21T01:27:27.5769409Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-21T01:27:27.5790940Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/c472c22c-b8aa-43e3-b078-a71f4f1aecde/terraform test_working_directory=/tmp/plugintest2896672916 test_step_number=1
2026-05-21T01:27:27.5792234Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-21T01:27:27.5792635Z         
2026-05-21T01:27:27.5793069Z         Error: error creating project: test-acc-tf-p-952695055346099838
2026-05-21T01:27:27.5793653Z         
2026-05-21T01:27:27.5793966Z           with mongodbatlas_project.test,
2026-05-21T01:27:27.5794580Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-21T01:27:27.5795149Z           13: 	resource "mongodbatlas_project" "test" {
2026-05-21T01:27:27.5795470Z         
2026-05-21T01:27:27.5795949Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:27:27.5796589Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:27:27.5797177Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:27:27.5797596Z --- FAIL: TestAccSearchDeploymentAPI_basic (84.71s)
```

- 2026-05-22

### Error 2026-05-22T02:31:13+00:00
```
2026-05-22T02:31:13.4644363Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-22T02:31:13.4645278Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-22T02:31:13.4647651Z   diagnostic_detail=
2026-05-22T02:31:13.4650506Z    diagnostic_severity=ERROR tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_req_id=eccaf3a8-50e3-b65f-c00b-0ea7577f2d74
2026-05-22T02:31:13.4660383Z   
2026-05-22T02:31:13.4660906Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-22T02:31:13.4661471Z         
2026-05-22T02:31:13.4661903Z         Error: Error waiting for changes in Create
2026-05-22T02:31:13.4670861Z         
2026-05-22T02:31:13.4671497Z           with mongodbatlas_search_deployment_api.test,
2026-05-22T02:31:13.4672269Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-05-22T02:31:13.4672976Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-05-22T02:31:13.4673338Z         
2026-05-22T02:31:13.4673823Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-05-22T02:31:13.4674536Z         timeout: 1h0m0s)
2026-05-22T02:31:13.4675072Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-05-22T02:31:13.4675776Z         transient error, wait before retrying to allow resource deletion to finish
2026-05-22T02:31:13.4676256Z --- FAIL: TestAccSearchDeploymentAPI_basic (5399.27s)
```

- 2026-05-23

### Error 2026-05-23T01:35:22+00:00
```
2026-05-23T01:35:22.3046182Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-23T01:35:22.3046855Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-23T01:35:22.3057694Z    test_step_number=1 test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/665b5b51-05fb-4419-8ee4-d94514d2cedf/terraform test_working_directory=/tmp/plugintest3527968940
2026-05-23T01:35:22.3058752Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-23T01:35:22.3059134Z         
2026-05-23T01:35:22.3059564Z         Error: error creating project: test-acc-tf-p-1633789213342029187
2026-05-23T01:35:22.3059935Z         
2026-05-23T01:35:22.3060246Z           with mongodbatlas_project.test,
2026-05-23T01:35:22.3060868Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-05-23T01:35:22.3061453Z           13: 	resource "mongodbatlas_project" "test" {
2026-05-23T01:35:22.3061765Z         
2026-05-23T01:35:22.3062243Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-23T01:35:22.3063038Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-23T01:35:22.3063651Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:35:22.3064071Z --- FAIL: TestAccSearchDeploymentAPI_basic (69.90s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS an hour
- 2026-05-26 PASS 52 minutes
- 2026-05-27

### Error 2026-05-27T02:48:38+00:00
```
2026-05-27T02:48:38.3497953Z === RUN   TestAccSearchDeploymentAPI_basic
2026-05-27T02:48:38.3499215Z === CONT  TestAccSearchDeploymentAPI_basic
2026-05-27T02:48:38.3501780Z   diagnostic_detail=
2026-05-27T02:48:38.3506401Z    diagnostic_severity=ERROR diagnostic_summary="Error waiting for changes in Create" tf_req_id=1612eb32-9a10-bae6-5f04-aa71527fa46c tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-05-27T02:48:38.3519222Z   
2026-05-27T02:48:38.3519929Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-05-27T02:48:38.3520549Z         
2026-05-27T02:48:38.3521087Z         Error: Error waiting for changes in Create
2026-05-27T02:48:38.3521595Z         
2026-05-27T02:48:38.3522194Z           with mongodbatlas_search_deployment_api.test,
2026-05-27T02:48:38.3523391Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-05-27T02:48:38.3524530Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-05-27T02:48:38.3525085Z         
2026-05-27T02:48:38.3526032Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-05-27T02:48:38.3526740Z         timeout: 1h0m0s)
2026-05-27T02:48:38.3527606Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-05-27T02:48:38.3528727Z         transient error, wait before retrying to allow resource deletion to finish
2026-05-27T02:48:38.3529528Z --- FAIL: TestAccSearchDeploymentAPI_basic (6297.89s)
```

- 2026-05-28 PASS an hour
- 2026-05-29 PASS an hour
- 2026-05-30 PASS 46 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02

### Error 2026-06-02T01:14:07+00:00
```
2026-06-02T01:14:07.1515888Z === RUN   TestAccSearchDeploymentAPI_basic
2026-06-02T01:14:07.1516594Z === CONT  TestAccSearchDeploymentAPI_basic
2026-06-02T01:14:07.1527678Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/6507ee4e-dc7a-4bbe-b101-3e81409e6c03/terraform test_working_directory=/tmp/plugintest2582582255 test_step_number=1
2026-06-02T01:14:07.1528762Z     resource_test.go:26: Step 1/3 error: Error running apply: exit status 1
2026-06-02T01:14:07.1529176Z         
2026-06-02T01:14:07.1529628Z         Error: error creating project: test-acc-tf-p-7291672636251490253
2026-06-02T01:14:07.1530021Z         
2026-06-02T01:14:07.1530360Z           with mongodbatlas_project.test,
2026-06-02T01:14:07.1531003Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "test":
2026-06-02T01:14:07.1531816Z           13: 	resource "mongodbatlas_project" "test" {
2026-06-02T01:14:07.1532172Z         
2026-06-02T01:14:07.1532674Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:14:07.1533364Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:14:07.1533992Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:14:07.1534441Z --- FAIL: TestAccSearchDeploymentAPI_basic (74.83s)
```

- 2026-06-03

### Error 2026-06-03T02:44:39+00:00
```
2026-06-03T02:44:39.9066359Z === RUN   TestAccSearchDeploymentAPI_basic
2026-06-03T02:44:39.9068385Z === CONT  TestAccSearchDeploymentAPI_basic
2026-06-03T02:44:39.9083462Z    test_name=TestAccSearchDeploymentAPI_basic test_terraform_path=/home/runner/work/_temp/8fd49688-0f97-4721-ae98-7e659cd35e2f/terraform test_working_directory=/tmp/plugintest2148818013 test_step_number=2
2026-06-03T02:44:39.9084655Z     resource_test.go:26: Step 2/3 error: Error running apply: exit status 1
2026-06-03T02:44:39.9085100Z         
2026-06-03T02:44:39.9085471Z         Error: Error waiting for changes in Update
2026-06-03T02:44:39.9085821Z         
2026-06-03T02:44:39.9086234Z           with mongodbatlas_search_deployment_api.test,
2026-06-03T02:44:39.9087017Z           on terraform_plugin_test.tf line 37, in resource "mongodbatlas_search_deployment_api" "test":
2026-06-03T02:44:39.9087771Z           37: 		resource "mongodbatlas_search_deployment_api" "test" {
2026-06-03T02:44:39.9088153Z         
2026-06-03T02:44:39.9088659Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2026-06-03T02:44:39.9089359Z         timeout: 30m0s)
2026-06-03T02:44:39.9097696Z    test_step_number=2
2026-06-03T02:44:39.9098270Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-06-03T02:44:39.9098773Z         
2026-06-03T02:44:39.9099495Z         Error: Error waiting for changes in Delete
2026-06-03T02:44:39.9100094Z         
2026-06-03T02:44:39.9100637Z         timeout while waiting for state to become 'DELETED' (last state: 'UPDATING',
2026-06-03T02:44:39.9101290Z         timeout: 10m0s)
2026-06-03T02:44:39.9101634Z --- FAIL: TestAccSearchDeploymentAPI_basic (5344.49s)
```

- 2026-06-04 PASS an hour
- 2026-06-05 PASS an hour

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 54 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 54 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 53 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 51 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
