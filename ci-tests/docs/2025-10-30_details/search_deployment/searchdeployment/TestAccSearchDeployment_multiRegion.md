# search_deployment/searchdeployment/TestAccSearchDeployment_multiRegion Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2) TIMEOUT
Success rate: 94.74%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-04 00:25](#error-2025-10-04t0025560000) |  | dev |  | 10802.09s
[2025-10-20 10:26](#error-2025-10-20t1026280000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e54de46041f5669afcb/clusters | dev | out_of_capacity | 2.10s
[2025-10-30 00:28](#error-2025-10-30t0028140000) |  | dev | timeout | 17994.00s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 38 minutes
  - PASS an hour
  - PASS an hour
  - PASS 45 minutes
  - PASS 24 minutes
  - PASS 30 minutes
  - PASS 29 minutes
  - PASS 24 minutes
- 2025-10-02 PASS 2 hours
- 2025-10-03 PASS an hour
- 2025-10-04

### Error 2025-10-04T00:25:56+00:00
```
2025-10-04T00:25:56.2394317Z === RUN   TestAccSearchDeployment_multiRegion
2025-10-04T00:25:56.2395152Z     resource_test.go:129: Creating execution project: test-acc-tf-p-7386186328839113254
2025-10-04T00:25:58.2226983Z === CONT  TestAccSearchDeployment_multiRegion
2025-10-04T03:25:59.0581369Z === NAME  TestAccSearchDeployment_multiRegion
2025-10-04T03:25:59.0582206Z     resource_test.go:141: Step 1/1 error: Error running apply: exit status 1
2025-10-04T03:25:59.0582722Z         
2025-10-04T03:25:59.0583146Z         Error: Error in create
2025-10-04T03:25:59.0583564Z         
2025-10-04T03:25:59.0584136Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-04T03:25:59.0585305Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-04T03:25:59.0586768Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-04T03:25:59.0587397Z         
2025-10-04T03:25:59.0588453Z         cluster=multi-region-cluster didn't reach desired state: IDLE, error: context
2025-10-04T03:25:59.0589219Z         deadline exceeded
2025-10-04T03:25:59.1034453Z --- FAIL: TestAccSearchDeployment_multiRegion (10802.86s)
```

- 2025-10-05 PASS 24 minutes
- 2025-10-06 PASS 28 minutes
- 2025-10-07 PASS 2 hours
- 2025-10-08 PASS 29 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 33 minutes
- 2025-10-11 PASS 29 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 31 minutes
- 2025-10-14 PASS 26 minutes
- 2025-10-15 PASS 26 minutes
- 2025-10-16 PASS 49 minutes
- 2025-10-17 PASS 29 minutes
- 2025-10-18 PASS 31 minutes
- 2025-10-19 PASS 26 minutes
- 2025-10-20
  - PASS an hour
  - FAIL 2 seconds

### Error 2025-10-20T10:26:28+00:00
```
2025-10-20T10:26:28.6049608Z === RUN   TestAccSearchDeployment_multiRegion
2025-10-20T10:26:28.6050611Z     resource_test.go:129: Creating execution project: test-acc-tf-p-9180931261860734515
2025-10-20T10:26:30.6146432Z === CONT  TestAccSearchDeployment_multiRegion
2025-10-20T10:26:31.5262862Z === NAME  TestAccSearchDeployment_multiRegion
2025-10-20T10:26:31.5263940Z     resource_test.go:141: Step 1/1 error: Error running apply: exit status 1
2025-10-20T10:26:31.5264518Z         
2025-10-20T10:26:31.5264951Z         Error: Error in create
2025-10-20T10:26:31.5265355Z         
2025-10-20T10:26:31.5265948Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-20T10:26:31.5267122Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-20T10:26:31.5268259Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-20T10:26:31.5268771Z         
2025-10-20T10:26:31.5269157Z         cluster name: multi-region-cluster, API error details:
2025-10-20T10:26:31.5269797Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e54de46041f5669afcb/clusters
2025-10-20T10:26:31.5270501Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:26:31.5271135Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:26:31.5271620Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:26:31.5708497Z --- FAIL: TestAccSearchDeployment_multiRegion (2.97s)
```

- 2025-10-21 PASS 24 minutes
- 2025-10-22
  - PASS 34 minutes
  - PASS 25 minutes
- 2025-10-23 PASS 46 minutes
- 2025-10-24 PASS 27 minutes
- 2025-10-25 PASS 34 minutes
- 2025-10-26 PASS 26 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 28 minutes
- 2025-10-29 PASS 33 minutes
- 2025-10-30

### Error 2025-10-30T00:28:14+00:00
```
2025-10-30T00:28:14.4408198Z === RUN   TestAccSearchDeployment_multiRegion
2025-10-30T00:28:14.4410498Z     resource_test.go:130: Creating execution project: test-acc-tf-p-6057251399155582433
2025-10-30T00:28:16.6881529Z === CONT  TestAccSearchDeployment_multiRegion
2025-10-30T03:39:23.4044511Z === NAME  TestAccSearchDeployment_multiRegion
2025-10-30T03:39:23.4045584Z     resource_test.go:142: Step 1/1 error: Error running apply: exit status 1
2025-10-30T03:39:23.4046216Z         
2025-10-30T03:39:23.4046778Z         Error: error during search deployment creation
2025-10-30T03:39:23.4047296Z         
2025-10-30T03:39:23.4047889Z           with mongodbatlas_search_deployment.test,
2025-10-30T03:39:23.4049023Z           on terraform_plugin_test.tf line 48, in resource "mongodbatlas_search_deployment" "test":
2025-10-30T03:39:23.4050173Z           48: 	resource "mongodbatlas_search_deployment" "test" {
2025-10-30T03:39:23.4050682Z         
2025-10-30T03:39:23.4051369Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-10-30T03:39:23.4052105Z         timeout: 3h0m0s)
2025-10-30T03:39:23.4052962Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-10-30T03:39:23.4054085Z         transient error, wait before retrying to allow resource deletion to finish
2025-10-30T05:28:10.5333505Z panic: test timed out after 5h0m0s
2025-10-30T05:28:10.5334240Z 	running tests:
2025-10-30T05:28:10.5334240Z 	running tests:
2025-10-30T05:28:10.5335056Z 		TestAccSearchDeployment_basic (4h59m54s)
2025-10-30T05:28:10.5335884Z 		TestAccSearchDeployment_multiRegion (4h59m54s)
```
