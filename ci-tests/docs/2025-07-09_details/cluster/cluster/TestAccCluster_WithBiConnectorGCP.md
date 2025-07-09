# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 116 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 111) FAIL(x 5)
Success rate: 95.69%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-05 00:28 | dev | 184.08s
2025-07-04 00:28 | dev | 10804.04s
2025-07-05 00:28 | dev | 10805.05s
2025-07-07 00:31 | dev | 10804.04s

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
#### PASS 16 minutes
### 2025-04-12
#### PASS 15 minutes
### 2025-04-13
#### PASS 17 minutes
### 2025-04-14
#### PASS 15 minutes
### 2025-04-15
#### PASS 14 minutes
### 2025-04-16
#### PASS 16 minutes
#### PASS 17 minutes
### 2025-04-17
#### PASS 17 minutes
### 2025-04-18
#### PASS 16 minutes
### 2025-04-19
#### PASS 15 minutes
### 2025-04-20
#### PASS 15 minutes
### 2025-04-21
#### PASS 15 minutes
### 2025-04-22
#### PASS 16 minutes
### 2025-04-23
#### PASS 15 minutes
### 2025-04-24
#### PASS 16 minutes
### 2025-04-25
#### PASS 16 minutes
### 2025-04-26
#### PASS 16 minutes
### 2025-04-27
#### PASS 16 minutes
### 2025-04-28
#### PASS 16 minutes
### 2025-04-29
#### PASS 15 minutes
### 2025-04-30
#### PASS 16 minutes
### 2025-05-01
#### PASS 17 minutes
#### PASS 14 minutes
#### PASS 14 minutes
#### PASS 14 minutes
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 14 minutes
### 2025-05-02
#### PASS 15 minutes
### 2025-05-03
#### PASS 13 minutes
### 2025-05-04
#### PASS 14 minutes
### 2025-05-05
#### PASS 14 minutes
### 2025-05-06
#### PASS 17 minutes
### 2025-05-07
#### PASS 14 minutes
### 2025-05-08
#### PASS 16 minutes
### 2025-05-09
#### PASS 15 minutes
### 2025-05-10
#### PASS 15 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:40.3382532Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-05-11T00:29:40.3426279Z     shared_resource.go:84: 
2025-05-11T00:29:40.3428008Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:40.3429771Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:29:40.3431522Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:29:40.3433233Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:29:40.3435030Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/cluster/resource_cluster_test.go:410
2025-05-11T00:29:40.3435786Z         	Error:      	Received unexpected error:
2025-05-11T00:29:40.3436879Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3437441Z         	Test:       	TestAccCluster_WithBiConnectorGCP
2025-05-11T00:29:40.3438635Z         	Messages:   	Project creation failed: test-acc-tf-p-4951704765723461691, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:40.3439316Z --- FAIL: TestAccCluster_WithBiConnectorGCP (0.01s)
```
### 2025-05-12
#### PASS 14 minutes
### 2025-05-13
#### PASS 16 minutes
#### PASS 15 minutes
### 2025-05-14
#### PASS 21 minutes
### 2025-05-15
#### PASS 15 minutes
### 2025-05-16
#### PASS 17 minutes
### 2025-05-17
#### PASS 16 minutes
### 2025-05-18
#### PASS 16 minutes
### 2025-05-19
#### PASS 17 minutes
### 2025-05-20
#### PASS 16 minutes
### 2025-05-21
#### PASS 16 minutes
### 2025-05-22
#### PASS 15 minutes
### 2025-05-23
#### PASS 16 minutes
### 2025-05-24
#### PASS 16 minutes
### 2025-05-25
#### PASS 16 minutes
### 2025-05-26
#### PASS 16 minutes
### 2025-05-27
#### PASS 16 minutes
### 2025-05-28
#### PASS 29 minutes
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 15 minutes
### 2025-05-29
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-05-30
#### PASS 35 minutes
#### PASS 14 minutes
### 2025-05-31
#### PASS 15 minutes
### 2025-06-01
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 14 minutes
#### PASS 14 minutes
#### PASS 14 minutes
#### PASS 12 minutes
### 2025-06-02
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 14 minutes
### 2025-06-03
#### PASS 15 minutes
### 2025-06-04
#### PASS 15 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:44.4430899Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-06-05T00:28:48.8431399Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-06-05T00:31:51.8843921Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-06-05T00:31:51.8847243Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:31:51.8849292Z         
2025-06-05T00:31:51.8865738Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4bcc939f27413250702/clusters/test-acc-tf-c-5443582592461565030 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:31:51.8868069Z         
2025-06-05T00:31:51.8868659Z           with mongodbatlas_cluster.basic_gcp,
2025-06-05T00:31:51.8869846Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-06-05T00:31:51.8870879Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-06-05T00:31:51.8871438Z         
2025-06-05T00:31:52.0226424Z --- FAIL: TestAccCluster_WithBiConnectorGCP (184.79s)
```
### 2025-06-06
#### PASS 15 minutes
### 2025-06-07
#### PASS 16 minutes
### 2025-06-08
#### PASS 14 minutes
### 2025-06-09
#### PASS 15 minutes
### 2025-06-10
#### PASS 30 minutes
### 2025-06-11
#### PASS 16 minutes
#### PASS 15 minutes
### 2025-06-12
#### PASS 16 minutes
### 2025-06-13
#### PASS 17 minutes
### 2025-06-14
#### PASS 18 minutes
### 2025-06-15
#### PASS 15 minutes
### 2025-06-16
#### PASS 17 minutes
### 2025-06-17
#### PASS 20 minutes
### 2025-06-18
#### PASS 14 minutes
### 2025-06-19
#### PASS 31 minutes
### 2025-06-20
#### PASS 15 minutes
### 2025-06-21
#### PASS 17 minutes
### 2025-06-22
#### PASS 16 minutes
### 2025-06-23
#### PASS 14 minutes
### 2025-06-24
#### PASS 17 minutes
### 2025-06-25
#### PASS 14 minutes
### 2025-06-26
#### PASS 15 minutes
### 2025-06-27
#### PASS 15 minutes
### 2025-06-28
#### PASS 16 minutes
### 2025-06-29
#### PASS 15 minutes
### 2025-06-30
#### PASS 16 minutes
### 2025-07-01
#### PASS 16 minutes
#### PASS 14 minutes
#### PASS 16 minutes
#### PASS 15 minutes
#### PASS 14 minutes
#### PASS 17 minutes
### 2025-07-02
#### PASS 18 minutes
### 2025-07-03
#### PASS 16 minutes
### 2025-07-04
#### FAIL 3 hours
```
2025-07-04T00:28:48.5927600Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-04T00:28:53.1164747Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-04T03:28:55.7282414Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-07-04T03:28:55.7283589Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-07-04T03:28:55.7284215Z         
2025-07-04T03:28:55.7285420Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-04T03:28:55.7286304Z         
2025-07-04T03:28:55.7286773Z           with mongodbatlas_cluster.basic_gcp,
2025-07-04T03:28:55.7287732Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-04T03:28:55.7288674Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-04T03:28:55.7289161Z         
2025-07-04T03:28:55.7746305Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10804.38s)
```
### 2025-07-05
#### FAIL 3 hours
```
2025-07-05T00:28:03.0649648Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-05T00:28:09.1120358Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-05T03:28:11.8489903Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-07-05T03:28:11.8490794Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-07-05T03:28:11.8491726Z         
2025-07-05T03:28:11.8493014Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-05T03:28:11.8493984Z         
2025-07-05T03:28:11.8494509Z           with mongodbatlas_cluster.basic_gcp,
2025-07-05T03:28:11.8495863Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-05T03:28:11.8496809Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-05T03:28:11.8497288Z         
2025-07-05T03:28:11.8984334Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10805.52s)
```
### 2025-07-06
#### PASS 14 minutes
### 2025-07-07
#### FAIL 3 hours
```
2025-07-07T00:31:31.6866423Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-07T00:31:36.2481483Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-07T03:31:38.9494707Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-07-07T03:31:38.9495594Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-07-07T03:31:38.9496263Z         
2025-07-07T03:31:38.9497509Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-07T03:31:38.9498419Z         
2025-07-07T03:31:38.9498936Z           with mongodbatlas_cluster.basic_gcp,
2025-07-07T03:31:38.9500020Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-07T03:31:38.9501017Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-07T03:31:38.9501523Z         
2025-07-07T03:31:39.0024844Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10804.43s)
```
### 2025-07-08
#### PASS 18 minutes
### 2025-07-09
#### PASS 30 minutes