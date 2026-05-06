# search_deployment/searchdeployment/TestAccSearchDeployment_multiRegion Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 6)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:45](#error-2026-04-11t0045310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s
[2026-04-16 00:52](#error-2026-04-16t0052480000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032a81ec945fedc7287b5/clusters | dev | out_of_capacity | 1.02s
[2026-04-17 00:48](#error-2026-04-17t0048490000) |  | dev | timeout | 11617.05s
[2026-04-18 00:46](#error-2026-04-18t0046440000) |  | dev | timeout | 11734.02s
[2026-04-21 00:51](#error-2026-04-21t0051100000) |  | dev | timeout | 11742.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 hours
- 2026-04-08 PASS 31 minutes
- 2026-04-09 PASS 50 minutes
- 2026-04-10 PASS 49 minutes
- 2026-04-11

### Error 2026-04-11T00:45:31+00:00
```
2026-04-11T00:45:31.7368165Z === RUN   TestAccSearchDeployment_multiRegion
2026-04-11T00:45:31.7368746Z     resource_test.go:130: Creating execution project (1): test-acc-tf-p-3650524953674932893
2026-04-11T00:46:39.5131726Z     resource_test.go:130: 
2026-04-11T00:46:39.5133738Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:46:39.5137021Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:46:39.5139041Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:46:39.5140917Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-04-11T00:46:39.5143236Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchdeployment/resource_test.go:130
2026-04-11T00:46:39.5144461Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T00:46:39.5144985Z         	Error:      	Received unexpected error:
2026-04-11T00:46:39.5146914Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:46:39.5148916Z         	Test:       	TestAccSearchDeployment_multiRegion
2026-04-11T00:46:39.5152273Z         	Messages:   	Project creation failed: test-acc-tf-p-3650524953674932893, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:46:39.5154746Z --- FAIL: TestAccSearchDeployment_multiRegion (67.78s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 35 minutes
- 2026-04-14 PASS 45 minutes
- 2026-04-15 PASS 36 minutes
- 2026-04-16

### Error 2026-04-16T00:52:48+00:00
```
2026-04-16T00:52:48.2905924Z === RUN   TestAccSearchDeployment_multiRegion
2026-04-16T00:52:48.2912417Z === CONT  TestAccSearchDeployment_multiRegion
2026-04-16T00:52:49.2552957Z   
2026-04-16T00:52:49.4189171Z === NAME  TestAccSearchDeployment_multiRegion
2026-04-16T00:52:49.4189703Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2026-04-16T00:52:49.4190174Z         
2026-04-16T00:52:49.4190440Z         Error: Error in create
2026-04-16T00:52:49.4190737Z         
2026-04-16T00:52:49.4191114Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T00:52:49.4192130Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T00:52:49.4192903Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T00:52:49.4193302Z         
2026-04-16T00:52:49.4193674Z         cluster name: multi-region-cluster, API error details:
2026-04-16T00:52:49.4194372Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032a81ec945fedc7287b5/clusters
2026-04-16T00:52:49.4195443Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:52:49.4196191Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:52:49.4196752Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:52:49.4632727Z --- FAIL: TestAccSearchDeployment_multiRegion (1.17s)
```

- 2026-04-17

### Error 2026-04-17T00:48:49+00:00
```
2026-04-17T00:48:49.8796581Z === RUN   TestAccSearchDeployment_multiRegion
2026-04-17T00:48:49.8860740Z === CONT  TestAccSearchDeployment_multiRegion
2026-04-17T04:02:27.3443421Z === NAME  TestAccSearchDeployment_multiRegion
2026-04-17T04:02:27.3444136Z     resource_test.go:142: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-17T04:02:27.3444644Z         
2026-04-17T04:02:27.3444980Z         Error: error during search deployment delete
2026-04-17T04:02:27.3445287Z         
2026-04-17T04:02:27.3445735Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-17T04:02:27.3446178Z         timeout: 3h0m0s)
2026-04-17T04:02:27.3446745Z --- FAIL: TestAccSearchDeployment_multiRegion (11617.46s)
```

- 2026-04-18

### Error 2026-04-18T00:46:44+00:00
```
2026-04-18T00:46:44.9190990Z === RUN   TestAccSearchDeployment_multiRegion
2026-04-18T00:46:44.9191582Z     resource_test.go:130: Creating execution project (1): test-acc-tf-p-3806402043567806257
2026-04-18T00:47:07.4732164Z === CONT  TestAccSearchDeployment_multiRegion
2026-04-18T04:02:19.0872086Z    test_terraform_path=/home/runner/work/_temp/d19a81bf-1fad-4f67-a889-c83bdb92ebdd/terraform test_working_directory=/tmp/plugintest3452979323 test_name=TestAccSearchDeployment_multiRegion test_step_number=1
2026-04-18T04:02:19.0873811Z     resource_test.go:142: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-18T04:02:19.0874400Z         
2026-04-18T04:02:19.0874792Z         Error: error during search deployment delete
2026-04-18T04:02:19.0875152Z         
2026-04-18T04:02:19.0875707Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-18T04:02:19.0876222Z         timeout: 3h0m0s)
2026-04-18T04:02:19.0876591Z --- FAIL: TestAccSearchDeployment_multiRegion (11734.17s)
```

- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21

### Error 2026-04-21T00:51:10+00:00
```
2026-04-21T00:51:10.6112419Z === RUN   TestAccSearchDeployment_multiRegion
2026-04-21T00:51:10.6120298Z === CONT  TestAccSearchDeployment_multiRegion
2026-04-21T04:06:53.1866692Z === NAME  TestAccSearchDeployment_multiRegion
2026-04-21T04:06:53.1867377Z     resource_test.go:142: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-21T04:06:53.1867875Z         
2026-04-21T04:06:53.1868222Z         Error: error during search deployment delete
2026-04-21T04:06:53.1868532Z         
2026-04-21T04:06:53.1868993Z         timeout while waiting for state to become 'DELETED' (last state: 'IDLE',
2026-04-21T04:06:53.1869440Z         timeout: 3h0m0s)
2026-04-21T04:06:53.1869766Z --- FAIL: TestAccSearchDeployment_multiRegion (11742.57s)
```

- 2026-04-22 PASS an hour
- 2026-04-23 PASS 44 minutes
- 2026-04-24 PASS 32 minutes
- 2026-04-25 PASS 29 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 35 minutes
- 2026-04-28 PASS 36 minutes
- 2026-04-29 PASS 47 minutes
- 2026-04-30 PASS 53 minutes
- 2026-05-01 PASS 31 minutes
- 2026-05-02 PASS 28 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 34 minutes
- 2026-05-05 PASS 58 minutes
- 2026-05-06 PASS 54 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-04 16:37](#error-2026-05-04t1637150000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69f8cb394d55307a68446ddc/clusters | qa | out_of_capacity | 1.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 31 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 28 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 27 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 35 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 30 minutes
- 2026-05-04
  - FAIL a second

### Error 2026-05-04T16:37:15+00:00
```
2026-05-04T16:37:15.8981175Z === RUN   TestAccSearchDeployment_multiRegion
2026-05-04T16:37:15.9008758Z === CONT  TestAccSearchDeployment_multiRegion
2026-05-04T16:37:17.0280793Z === NAME  TestAccSearchDeployment_multiRegion
2026-05-04T16:37:17.0281695Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2026-05-04T16:37:17.0282177Z         
2026-05-04T16:37:17.0282573Z         Error: Error in create
2026-05-04T16:37:17.0282972Z         
2026-05-04T16:37:17.0283507Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-05-04T16:37:17.0284354Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-05-04T16:37:17.0285108Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-05-04T16:37:17.0285598Z         
2026-05-04T16:37:17.0286022Z         cluster name: multi-region-cluster, API error details:
2026-05-04T16:37:17.0287324Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69f8cb394d55307a68446ddc/clusters
2026-05-04T16:37:17.0288691Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-04T16:37:17.0289490Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-04T16:37:17.0290121Z         Conflict. Params: [], BadRequestDetail: 
2026-05-04T16:37:17.0807210Z --- FAIL: TestAccSearchDeployment_multiRegion (1.18s)
```

  - PASS 26 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 30 minutes
