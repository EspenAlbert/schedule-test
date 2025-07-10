# cluster/cluster/TestAccCluster_basicGCP Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 110) FAIL(x 6)
Success rate: 94.83%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-01 04:51](#error-2025-05-01t0451560000) |  | dev |  | 888.10s
[2025-05-11 00:29](#error-2025-05-11t0029400000) |  | qa |  | 0.00s
[2025-06-05 00:28](#error-2025-06-05t0028440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b9161ca93c1f051d05/clusters/test-acc-tf-c-315986008700903542 | dev | flaky_500 | 183.00s
[2025-07-04 00:28](#error-2025-07-04t0028480000) |  | dev | timeout | 10802.06s
[2025-07-05 00:28](#error-2025-07-05t0028030000) |  | dev | timeout | 10802.06s
[2025-07-07 00:31](#error-2025-07-07t0031310000) |  | dev | timeout | 10802.06s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 14 minutes
- 2025-04-13 PASS 17 minutes
- 2025-04-14 PASS 15 minutes
- 2025-04-15 PASS 15 minutes
- 2025-04-16
  - PASS 15 minutes
  - PASS 17 minutes
- 2025-04-17 PASS 15 minutes
- 2025-04-18 PASS 16 minutes
- 2025-04-19 PASS 15 minutes
- 2025-04-20 PASS 15 minutes
- 2025-04-21 PASS 14 minutes
- 2025-04-22 PASS 16 minutes
- 2025-04-23 PASS 16 minutes
- 2025-04-24 PASS 15 minutes
- 2025-04-25 PASS 16 minutes
- 2025-04-26 PASS 16 minutes
- 2025-04-27 PASS 16 minutes
- 2025-04-28 PASS 14 minutes
- 2025-04-29 PASS 15 minutes
- 2025-04-30 PASS 16 minutes
- 2025-05-01
  - PASS 17 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - FAIL 14 minutes

### Error 2025-05-01T04:51:56+00:00
```
2025-05-01T04:51:56.0359429Z === RUN   TestAccCluster_basicGCP
2025-05-01T04:51:59.7556855Z === CONT  TestAccCluster_basicGCP
2025-05-01T05:02:37.4225265Z === NAME  TestAccCluster_basicGCP
2025-05-01T05:02:37.4225925Z     resource_cluster_test.go:374: Step 2/2 error: Error running apply: exit status 1
2025-05-01T05:02:37.4226442Z         
2025-05-01T05:02:37.4227594Z         Error: error reading Advanced Configuration Option (v20240530) for MongoDB Cluster (test-acc-tf-c-8126204254835255778): undefined response type
2025-05-01T05:02:37.4228209Z         
2025-05-01T05:02:37.4228610Z           with mongodbatlas_cluster.basic_gcp,
2025-05-01T05:02:37.4229327Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-05-01T05:02:37.4229927Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-05-01T05:02:37.4230285Z         
2025-05-01T05:06:48.7325428Z --- FAIL: TestAccCluster_basicGCP (888.99s)
```

  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 12 minutes
- 2025-05-02 PASS 15 minutes
- 2025-05-03 PASS 13 minutes
- 2025-05-04 PASS 15 minutes
- 2025-05-05 PASS 13 minutes
- 2025-05-06 PASS 17 minutes
- 2025-05-07 PASS 14 minutes
- 2025-05-08 PASS 18 minutes
- 2025-05-09 PASS 15 minutes
- 2025-05-10 PASS 15 minutes
- 2025-05-11

### Error 2025-05-11T00:29:40+00:00
```
2025-05-11T00:29:40.3325018Z === RUN   TestAccCluster_basicGCP
2025-05-11T00:29:40.3366893Z     shared_resource.go:84: 
2025-05-11T00:29:40.3368606Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3370989Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3373310Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.3375619Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.3378117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:371
2025-05-11T00:29:40.3378871Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.3379739Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3380249Z         	Test:       	TestAccCluster_basicGCP
2025-05-11T00:29:40.3381530Z         	Messages:   	Project creation failed: test-acc-tf-p-8731554859375908394, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3382209Z --- FAIL: TestAccCluster_basicGCP (0.01s)
```

- 2025-05-12 PASS 15 minutes
- 2025-05-13
  - PASS 16 minutes
  - PASS 15 minutes
- 2025-05-14 PASS 22 minutes
- 2025-05-15 PASS 14 minutes
- 2025-05-16 PASS 17 minutes
- 2025-05-17 PASS 16 minutes
- 2025-05-18 PASS 16 minutes
- 2025-05-19 PASS 16 minutes
- 2025-05-20 PASS 16 minutes
- 2025-05-21 PASS 16 minutes
- 2025-05-22 PASS 17 minutes
- 2025-05-23 PASS 25 minutes
- 2025-05-24 PASS 16 minutes
- 2025-05-25 PASS 16 minutes
- 2025-05-26 PASS 16 minutes
- 2025-05-27 PASS 15 minutes
- 2025-05-28
  - PASS 25 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-05-29
  - PASS 22 minutes
  - PASS 16 minutes
- 2025-05-30
  - PASS 13 minutes
  - PASS 14 minutes
- 2025-05-31 PASS 13 minutes
- 2025-06-01
  - PASS 13 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-06-02
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 12 minutes
- 2025-06-03 PASS 16 minutes
- 2025-06-04 PASS 16 minutes
- 2025-06-05

### Error 2025-06-05T00:28:44+00:00
```
2025-06-05T00:28:44.4430101Z === RUN   TestAccCluster_basicGCP
2025-06-05T00:28:48.8432445Z === CONT  TestAccCluster_basicGCP
2025-06-05T00:31:51.7940814Z === NAME  TestAccCluster_basicGCP
2025-06-05T00:31:51.7941680Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:31:51.7942364Z         
2025-06-05T00:31:51.7945857Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9161ca93c1f051d05/clusters/test-acc-tf-c-315986008700903542 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:51.7948172Z         
2025-06-05T00:31:51.7948833Z           with mongodbatlas_cluster.basic_gcp,
2025-06-05T00:31:51.7949995Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-06-05T00:31:51.7951058Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-06-05T00:31:51.7951579Z         
2025-06-05T00:31:51.8675086Z --- FAIL: TestAccCluster_basicGCP (183.02s)
```

- 2025-06-06 PASS 15 minutes
- 2025-06-07 PASS 16 minutes
- 2025-06-08 PASS 14 minutes
- 2025-06-09 PASS 15 minutes
- 2025-06-10 PASS 29 minutes
- 2025-06-11
  - PASS 17 minutes
  - PASS 14 minutes
- 2025-06-12 PASS 16 minutes
- 2025-06-13 PASS 17 minutes
- 2025-06-14 PASS 15 minutes
- 2025-06-15 PASS 15 minutes
- 2025-06-16 PASS 17 minutes
- 2025-06-17 PASS 15 minutes
- 2025-06-18 PASS 24 minutes
- 2025-06-19 PASS 19 minutes
- 2025-06-20 PASS 15 minutes
- 2025-06-21 PASS 17 minutes
- 2025-06-22 PASS 15 minutes
- 2025-06-23 PASS 14 minutes
- 2025-06-24 PASS 17 minutes
- 2025-06-25 PASS 16 minutes
- 2025-06-26 PASS 15 minutes
- 2025-06-27 PASS 15 minutes
- 2025-06-28 PASS 14 minutes
- 2025-06-29 PASS 15 minutes
- 2025-06-30 PASS 24 minutes
- 2025-07-01
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 26 minutes
- 2025-07-02 PASS 15 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04

### Error 2025-07-04T00:28:48+00:00
```
2025-07-04T00:28:48.5927049Z === RUN   TestAccCluster_basicGCP
2025-07-04T00:28:53.1188560Z === CONT  TestAccCluster_basicGCP
2025-07-04T03:28:55.6374654Z === NAME  TestAccCluster_basicGCP
2025-07-04T03:28:55.6375339Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2025-07-04T03:28:55.6375802Z         
2025-07-04T03:28:55.6376941Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-04T03:28:55.6377605Z         
2025-07-04T03:28:55.6377991Z           with mongodbatlas_cluster.basic_gcp,
2025-07-04T03:28:55.6378838Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-04T03:28:55.6379745Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-04T03:28:55.6380433Z         
2025-07-04T03:28:55.6997890Z --- FAIL: TestAccCluster_basicGCP (10802.58s)
```

- 2025-07-05

### Error 2025-07-05T00:28:03+00:00
```
2025-07-05T00:28:03.0648685Z === RUN   TestAccCluster_basicGCP
2025-07-05T00:28:09.1143949Z === CONT  TestAccCluster_basicGCP
2025-07-05T03:28:11.6692529Z === NAME  TestAccCluster_basicGCP
2025-07-05T03:28:11.6693386Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2025-07-05T03:28:11.6694064Z         
2025-07-05T03:28:11.6695316Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-05T03:28:11.6696236Z         
2025-07-05T03:28:11.6696792Z           with mongodbatlas_cluster.basic_gcp,
2025-07-05T03:28:11.6697842Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-05T03:28:11.6698748Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-05T03:28:11.6699257Z         
2025-07-05T03:28:11.7212378Z --- FAIL: TestAccCluster_basicGCP (10802.61s)
```

- 2025-07-06 PASS 15 minutes
- 2025-07-07

### Error 2025-07-07T00:31:31+00:00
```
2025-07-07T00:31:31.6865508Z === RUN   TestAccCluster_basicGCP
2025-07-07T00:31:36.2481995Z === CONT  TestAccCluster_basicGCP
2025-07-07T03:31:38.7608772Z === NAME  TestAccCluster_basicGCP
2025-07-07T03:31:38.7609606Z     resource_cluster_test.go:374: Step 1/2 error: Error running apply: exit status 1
2025-07-07T03:31:38.7610278Z         
2025-07-07T03:31:38.7611546Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-07T03:31:38.7612300Z         
2025-07-07T03:31:38.7612609Z           with mongodbatlas_cluster.basic_gcp,
2025-07-07T03:31:38.7613422Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-07T03:31:38.7614068Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-07T03:31:38.7614590Z         
2025-07-07T03:31:38.8070593Z --- FAIL: TestAccCluster_basicGCP (10802.57s)
```

- 2025-07-08 PASS 17 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10 PASS 15 minutes