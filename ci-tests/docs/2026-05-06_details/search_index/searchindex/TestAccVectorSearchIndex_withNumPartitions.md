# search_index/searchindex/TestAccVectorSearchIndex_withNumPartitions Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 00:50](#error-2026-04-16t0050450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters | dev | out_of_capacity | 0.08s
[2026-04-17 04:03](#error-2026-04-17t0403120000) |  | dev |  | 0.05s
[2026-04-18 04:04](#error-2026-04-18t0404480000) |  | dev |  | 0.06s
[2026-04-20 04:03](#error-2026-04-20t0403230000) |  | dev |  | 0.04s
[2026-04-21 04:07](#error-2026-04-21t0407540000) |  | dev |  | 0.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 12 minutes
- 2026-04-08 PASS 15 minutes
- 2026-04-09 PASS 24 minutes
- 2026-04-10 PASS 21 minutes
- 2026-04-11 PASS 12 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 16 minutes
- 2026-04-14 PASS 11 minutes
- 2026-04-15 PASS 15 minutes
- 2026-04-16

### Error 2026-04-16T00:50:45+00:00
```
2026-04-16T00:50:45.9703572Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-04-16T00:50:45.9704381Z     resource_search_index_test.go:224: Creating execution cluster: test-acc-tf-c-8386298734914567258
2026-04-16T00:50:46.8126084Z     resource_search_index_test.go:224: 
2026-04-16T00:50:46.8128005Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:50:46.8130136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:50:46.8132380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/searchindex/resource_search_index_test.go:224
2026-04-16T00:50:46.8133816Z         	Error:      	Received unexpected error:
2026-04-16T00:50:46.8137127Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:46.8231338Z         	Test:       	TestAccVectorSearchIndex_withNumPartitions
2026-04-16T00:50:46.8233590Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8386298734914567258, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0325a1ec945fedc71a07e/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:46.8235012Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (0.84s)
```

- 2026-04-17

### Error 2026-04-17T04:03:12+00:00
```
2026-04-17T04:03:12.3316654Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-04-17T04:03:12.8187173Z   
2026-04-17T04:03:12.8187774Z     resource_search_index_test.go:227: Step 1/3 error: Error running apply: exit status 1
2026-04-17T04:03:12.8188380Z         
2026-04-17T04:03:12.8188885Z         Error: error during search deployment creation
2026-04-17T04:03:12.8189300Z         
2026-04-17T04:03:12.8189758Z           with mongodbatlas_search_deployment.test,
2026-04-17T04:03:12.8190568Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_search_deployment" "test":
2026-04-17T04:03:12.8191357Z           13: 		resource "mongodbatlas_search_deployment" "test" {
2026-04-17T04:03:12.8191696Z         
2026-04-17T04:03:12.8192813Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e1836a6dfdaa5fce046c1a/clusters/test-acc-tf-c-4291064073387370980/search/deployment
2026-04-17T04:03:12.8193541Z         POST: HTTP 409 Conflict (Error code:
2026-04-17T04:03:12.8194115Z         "ATLAS_SEARCH_DEPLOYMENT_ALREADY_EXISTS") Detail: Search deployment already
2026-04-17T04:03:12.8194802Z         exists for specified cluster. Reason: Conflict. Params: [], BadRequestDetail:
2026-04-17T04:03:12.8651693Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (0.53s)
```

- 2026-04-18

### Error 2026-04-18T04:04:48+00:00
```
2026-04-18T04:04:48.7619700Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-04-18T04:04:49.2714561Z    test_step_number=1 test_name=TestAccVectorSearchIndex_withNumPartitions test_terraform_path=/home/runner/work/_temp/cc86cb3a-f095-41da-9ae2-297bb0bdbbed/terraform test_working_directory=/tmp/plugintest376224167
2026-04-18T04:04:49.2715900Z     resource_search_index_test.go:227: Step 1/3 error: Error running apply: exit status 1
2026-04-18T04:04:49.2716472Z         
2026-04-18T04:04:49.2716824Z         Error: error during search deployment creation
2026-04-18T04:04:49.2717132Z         
2026-04-18T04:04:49.2717588Z           with mongodbatlas_search_deployment.test,
2026-04-18T04:04:49.2718324Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_search_deployment" "test":
2026-04-18T04:04:49.2719119Z           13: 		resource "mongodbatlas_search_deployment" "test" {
2026-04-18T04:04:49.2719439Z         
2026-04-18T04:04:49.2720642Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e2d444eb355eaa1b2fa362/clusters/test-acc-tf-c-86332435665801298/search/deployment
2026-04-18T04:04:49.2721819Z         POST: HTTP 409 Conflict (Error code:
2026-04-18T04:04:49.2722384Z         "ATLAS_SEARCH_DEPLOYMENT_ALREADY_EXISTS") Detail: Search deployment already
2026-04-18T04:04:49.2723237Z         exists for specified cluster. Reason: Conflict. Params: [], BadRequestDetail:
2026-04-18T04:04:49.3161734Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (0.56s)
```

- 2026-04-19: MISSING
- 2026-04-20

### Error 2026-04-20T04:03:23+00:00
```
2026-04-20T04:03:23.2617759Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-04-20T04:03:23.6386689Z   
2026-04-20T04:03:23.6387379Z     resource_search_index_test.go:227: Step 1/3 error: Error running apply: exit status 1
2026-04-20T04:03:23.6387824Z         
2026-04-20T04:03:23.6388164Z         Error: error during search deployment creation
2026-04-20T04:03:23.6388470Z         
2026-04-20T04:03:23.6388812Z           with mongodbatlas_search_deployment.test,
2026-04-20T04:03:23.6389493Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_search_deployment" "test":
2026-04-20T04:03:23.6390141Z           13: 		resource "mongodbatlas_search_deployment" "test" {
2026-04-20T04:03:23.6390465Z         
2026-04-20T04:03:23.6391280Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e57804d4c388c612b326f8/clusters/test-acc-tf-c-5700656556641716049/search/deployment
2026-04-20T04:03:23.6392013Z         POST: HTTP 409 Conflict (Error code:
2026-04-20T04:03:23.6392558Z         "ATLAS_SEARCH_DEPLOYMENT_ALREADY_EXISTS") Detail: Search deployment already
2026-04-20T04:03:23.6393461Z         exists for specified cluster. Reason: Conflict. Params: [], BadRequestDetail:
2026-04-20T04:03:23.6863552Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (0.43s)
```

- 2026-04-21

### Error 2026-04-21T04:07:54+00:00
```
2026-04-21T04:07:54.1343539Z === RUN   TestAccVectorSearchIndex_withNumPartitions
2026-04-21T04:07:54.6439503Z   
2026-04-21T04:07:54.6440326Z     resource_search_index_test.go:227: Step 1/3 error: Error running apply: exit status 1
2026-04-21T04:07:54.6440884Z         
2026-04-21T04:07:54.6441371Z         Error: error during search deployment creation
2026-04-21T04:07:54.6441723Z         
2026-04-21T04:07:54.6442114Z           with mongodbatlas_search_deployment.test,
2026-04-21T04:07:54.6442895Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_search_deployment" "test":
2026-04-21T04:07:54.6443639Z           13: 		resource "mongodbatlas_search_deployment" "test" {
2026-04-21T04:07:54.6444014Z         
2026-04-21T04:07:54.6444931Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e6c97b6f32e9875824adf8/clusters/test-acc-tf-c-4967389194589829295/search/deployment
2026-04-21T04:07:54.6445756Z         POST: HTTP 409 Conflict (Error code:
2026-04-21T04:07:54.6446394Z         "ATLAS_SEARCH_DEPLOYMENT_ALREADY_EXISTS") Detail: Search deployment already
2026-04-21T04:07:54.6447149Z         exists for specified cluster. Reason: Conflict. Params: [], BadRequestDetail:
2026-04-21T04:07:54.6911198Z --- FAIL: TestAccVectorSearchIndex_withNumPartitions (0.56s)
```

- 2026-04-22 PASS 26 minutes
- 2026-04-23 PASS 16 minutes
- 2026-04-24 PASS 14 minutes
- 2026-04-25 PASS 13 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 12 minutes
- 2026-04-28 PASS 16 minutes
- 2026-04-29 PASS 16 minutes
- 2026-04-30 PASS 22 minutes
- 2026-05-01 PASS 16 minutes
- 2026-05-02 PASS 12 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 16 minutes
- 2026-05-05 PASS 29 minutes
- 2026-05-06 PASS 51 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 12 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 11 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 12 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 11 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 14 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 12 minutes
- 2026-05-04 PASS 12 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 12 minutes
