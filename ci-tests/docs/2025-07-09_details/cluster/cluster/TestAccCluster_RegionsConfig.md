# cluster/cluster/TestAccCluster_RegionsConfig Test Details
# Found 116 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL(x 4)
Success rate: 96.55%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-05-11 00:29 |  | qa |  | 0.00s
2025-06-05 00:28 |  | dev |  | 183.02s
2025-06-06 00:30 |  | dev |  | 991.01s
2025-06-30 00:30 |  | dev | flaky_400 | 2440.05s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 36 minutes
### 2025-04-12
#### PASS 36 minutes
### 2025-04-13
#### PASS 40 minutes
### 2025-04-14
#### PASS 35 minutes
### 2025-04-15
#### PASS 39 minutes
### 2025-04-16
#### PASS 50 minutes
#### PASS 43 minutes
### 2025-04-17
#### PASS 42 minutes
### 2025-04-18
#### PASS 36 minutes
### 2025-04-19
#### PASS 37 minutes
### 2025-04-20
#### PASS 38 minutes
### 2025-04-21
#### PASS 40 minutes
### 2025-04-22
#### PASS 38 minutes
### 2025-04-23
#### PASS 38 minutes
### 2025-04-24
#### PASS 34 minutes
### 2025-04-25
#### PASS 38 minutes
### 2025-04-26
#### PASS 39 minutes
### 2025-04-27
#### PASS 37 minutes
### 2025-04-28
#### PASS 37 minutes
### 2025-04-29
#### PASS 35 minutes
### 2025-04-30
#### PASS 45 minutes
### 2025-05-01
#### PASS 34 minutes
#### PASS 38 minutes
#### PASS 38 minutes
#### PASS 39 minutes
#### PASS 37 minutes
#### PASS 37 minutes
#### PASS 36 minutes
### 2025-05-02
#### PASS 41 minutes
### 2025-05-03
#### PASS 36 minutes
### 2025-05-04
#### PASS 38 minutes
### 2025-05-05
#### PASS 39 minutes
### 2025-05-06
#### PASS 46 minutes
### 2025-05-07
#### PASS 35 minutes
### 2025-05-08
#### PASS 45 minutes
### 2025-05-09
#### PASS 42 minutes
### 2025-05-10
#### PASS 38 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:40.3950990Z === RUN   TestAccCluster_RegionsConfig
2025-05-11T00:29:40.3993953Z     shared_resource.go:84: 
2025-05-11T00:29:40.3995093Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3997316Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3999036Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.4000777Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.4002587Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:1130
2025-05-11T00:29:40.4003335Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.4004200Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.4004743Z         	Test:       	TestAccCluster_RegionsConfig
2025-05-11T00:29:40.4005730Z         	Messages:   	Project creation failed: test-acc-tf-p-6027891299698969549, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.4006548Z --- FAIL: TestAccCluster_RegionsConfig (0.01s)
```
### 2025-05-12
#### PASS 37 minutes
### 2025-05-13
#### PASS 36 minutes
#### PASS 38 minutes
### 2025-05-14
#### PASS 42 minutes
### 2025-05-15
#### PASS 40 minutes
### 2025-05-16
#### PASS 37 minutes
### 2025-05-17
#### PASS 35 minutes
### 2025-05-18
#### PASS 38 minutes
### 2025-05-19
#### PASS 40 minutes
### 2025-05-20
#### PASS 35 minutes
### 2025-05-21
#### PASS 37 minutes
### 2025-05-22
#### PASS 36 minutes
### 2025-05-23
#### PASS 57 minutes
### 2025-05-24
#### PASS 33 minutes
### 2025-05-25
#### PASS 38 minutes
### 2025-05-26
#### PASS 36 minutes
### 2025-05-27
#### PASS 32 minutes
### 2025-05-28
#### PASS 46 minutes
#### PASS 34 minutes
#### PASS 34 minutes
#### PASS 36 minutes
### 2025-05-29
#### PASS 46 minutes
#### PASS 38 minutes
### 2025-05-30
#### PASS an hour
#### PASS 51 minutes
### 2025-05-31
#### PASS 39 minutes
### 2025-06-01
#### PASS 40 minutes
#### PASS 37 minutes
#### PASS 35 minutes
#### PASS 36 minutes
#### PASS 39 minutes
#### PASS 37 minutes
### 2025-06-02
#### PASS 40 minutes
#### PASS 39 minutes
#### PASS 38 minutes
### 2025-06-03
#### PASS 36 minutes
### 2025-06-04
#### PASS 42 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:48.8415468Z === RUN   TestAccCluster_RegionsConfig
2025-06-05T00:28:48.8422814Z === CONT  TestAccCluster_RegionsConfig
2025-06-05T00:31:51.9018516Z === NAME  TestAccCluster_RegionsConfig
2025-06-05T00:31:51.9019426Z     resource_cluster_test.go:1208: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:31:51.9020114Z         
2025-06-05T00:31:51.9023118Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4be161ca93c1f0520b9/clusters/test-acc-tf-c-982174584570793947 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:51.9025157Z         
2025-06-05T00:31:51.9025810Z           with mongodbatlas_cluster.test,
2025-06-05T00:31:51.9026872Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-05T00:31:51.9027812Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-05T00:31:51.9028308Z         
2025-06-05T00:31:52.0117038Z --- FAIL: TestAccCluster_RegionsConfig (183.17s)
```
### 2025-06-06
#### FAIL 16 minutes
```
2025-06-06T00:30:08.0292441Z === RUN   TestAccCluster_RegionsConfig
2025-06-06T00:30:08.0544602Z === CONT  TestAccCluster_RegionsConfig
2025-06-06T00:42:27.0330228Z === NAME  TestAccCluster_RegionsConfig
2025-06-06T00:42:27.0331155Z     resource_cluster_test.go:1208: Step 2/3 error: Error running apply: exit status 1
2025-06-06T00:42:27.0331701Z         
2025-06-06T00:42:27.0333502Z         Error: error updating MongoDB Cluster (test-acc-tf-c-247193634997246823): error updating MongoDB Cluster (test-acc-tf-c-247193634997246823): PATCH https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/6842368e8dba3d3587c49996/clusters/test-acc-tf-c-247193634997246823: 500 (request "UNEXPECTED_ERROR") Unexpected error.
2025-06-06T00:42:27.0334966Z         
2025-06-06T00:42:27.0335288Z           with mongodbatlas_cluster.test,
2025-06-06T00:42:27.0335879Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-06-06T00:42:27.0336417Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-06-06T00:42:27.0336700Z         
2025-06-06T00:46:39.1337146Z --- FAIL: TestAccCluster_RegionsConfig (991.09s)
```
### 2025-06-07
#### PASS 32 minutes
### 2025-06-08
#### PASS 36 minutes
### 2025-06-09
#### PASS 33 minutes
### 2025-06-10
#### PASS an hour
### 2025-06-11
#### PASS 32 minutes
#### PASS 35 minutes
### 2025-06-12
#### PASS 36 minutes
### 2025-06-13
#### PASS 39 minutes
### 2025-06-14
#### PASS an hour
### 2025-06-15
#### PASS 38 minutes
### 2025-06-16
#### PASS 41 minutes
### 2025-06-17
#### PASS an hour
### 2025-06-18
#### PASS 37 minutes
### 2025-06-19
#### PASS an hour
### 2025-06-20
#### PASS 33 minutes
### 2025-06-21
#### PASS 36 minutes
### 2025-06-22
#### PASS 39 minutes
### 2025-06-23
#### PASS 37 minutes
### 2025-06-24
#### PASS 34 minutes
### 2025-06-25
#### PASS 38 minutes
### 2025-06-26
#### PASS 39 minutes
### 2025-06-27
#### PASS 36 minutes
### 2025-06-28
#### PASS 35 minutes
### 2025-06-29
#### PASS 38 minutes
### 2025-06-30
#### FAIL 40 minutes
GoTestErrorClassification(error_class='flaky_400',author='human',run_id='2025-06-30T00:30:40.114000+00:00-TestAccCluster_RegionsConfig',confidence=1.0,ts_when='8 days ago')

```
2025-06-30T00:30:40.1143383Z === RUN   TestAccCluster_RegionsConfig
2025-06-30T00:30:40.1159167Z === CONT  TestAccCluster_RegionsConfig
2025-06-30T01:11:20.5806442Z === NAME  TestAccCluster_RegionsConfig
2025-06-30T01:11:20.5807434Z     resource_cluster_test.go:1208: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-30T01:11:20.5808033Z         
2025-06-30T01:11:20.5809414Z         Error: error deleting MongoDB Cluster (test-acc-tf-c-8381169831974942071): Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6861daaeb061b0401a4b94b8/clusters/test-acc-tf-c-8381169831974942071": dial tcp: lookup cloud-dev.mongodb.com: i/o timeout
2025-06-30T01:11:20.5810380Z         
2025-06-30T01:11:20.5810620Z --- FAIL: TestAccCluster_RegionsConfig (2440.47s)
```
### 2025-07-01
#### PASS 33 minutes
#### PASS 33 minutes
#### PASS 32 minutes
#### PASS 36 minutes
#### PASS 34 minutes
#### PASS 58 minutes
### 2025-07-02
#### PASS 32 minutes
### 2025-07-03
#### PASS 38 minutes
### 2025-07-04
#### PASS 48 minutes
### 2025-07-05
#### PASS 36 minutes
### 2025-07-06
#### PASS 33 minutes
### 2025-07-07
#### PASS 32 minutes
### 2025-07-08
#### PASS 33 minutes
### 2025-07-09
#### PASS 52 minutes