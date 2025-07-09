# cluster_outage_simulation/clusteroutagesimulation/TestAccOutageSimulationCluster_MultiRegion_basic Test Details
# Found 114 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:29 | qa | 0.00s
2025-06-05 00:28 | dev | 196.00s

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
#### PASS 25 minutes
### 2025-04-12
#### PASS 24 minutes
### 2025-04-13
#### PASS 32 minutes
### 2025-04-14
#### PASS 24 minutes
### 2025-04-15
#### PASS 25 minutes
### 2025-04-16
#### PASS 23 minutes
#### PASS 27 minutes
### 2025-04-17
#### PASS 24 minutes
### 2025-04-18
#### PASS 27 minutes
### 2025-04-19
#### PASS 24 minutes
### 2025-04-20
#### PASS 28 minutes
### 2025-04-21
#### PASS 26 minutes
### 2025-04-22
#### PASS 27 minutes
### 2025-04-23
#### PASS 24 minutes
### 2025-04-24
#### PASS 27 minutes
### 2025-04-25
#### PASS 30 minutes
### 2025-04-26
#### PASS 29 minutes
### 2025-04-27
#### PASS 32 minutes
### 2025-04-28
#### PASS 29 minutes
### 2025-04-29
#### PASS 28 minutes
### 2025-04-30
#### PASS 23 minutes
#### PASS 25 minutes
### 2025-05-01
#### PASS 24 minutes
#### PASS 23 minutes
#### PASS 24 minutes
#### PASS 24 minutes
#### PASS 23 minutes
#### PASS 22 minutes
#### PASS 25 minutes
### 2025-05-02
#### PASS 23 minutes
### 2025-05-03
#### PASS 24 minutes
### 2025-05-04
#### PASS 27 minutes
### 2025-05-05
#### PASS 26 minutes
### 2025-05-06
#### PASS 26 minutes
### 2025-05-07
#### PASS 29 minutes
### 2025-05-08
#### PASS 27 minutes
### 2025-05-09
#### PASS 24 minutes
### 2025-05-10
#### PASS 29 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:41.0243151Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-05-11T00:29:41.0243800Z     resource_cluster_outage_simulation_test.go:62: Creating execution project: test-acc-tf-p-5625543342490334364
2025-05-11T00:29:41.0284678Z     resource_cluster_outage_simulation_test.go:62: 
2025-05-11T00:29:41.0286535Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:41.0288277Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:41.0289892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:41.0291944Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_cluster_outage_simulation_test.go:78
2025-05-11T00:29:41.0294381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clusteroutagesimulation/resource_cluster_outage_simulation_test.go:62
2025-05-11T00:29:41.0295456Z         	Error:      	Received unexpected error:
2025-05-11T00:29:41.0296306Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:41.0296901Z         	Test:       	TestAccOutageSimulationCluster_MultiRegion_basic
2025-05-11T00:29:41.0297918Z         	Messages:   	Project creation failed: test-acc-tf-p-5625543342490334364, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:41.0298642Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (0.01s)
```
### 2025-05-12
#### PASS 26 minutes
### 2025-05-13
#### PASS 23 minutes
#### PASS 28 minutes
### 2025-05-14
#### PASS 30 minutes
### 2025-05-15
#### PASS 23 minutes
### 2025-05-16
#### PASS 26 minutes
### 2025-05-17
#### PASS 28 minutes
### 2025-05-18
#### PASS 28 minutes
### 2025-05-19
#### PASS 33 minutes
### 2025-05-20
#### PASS 29 minutes
### 2025-05-21
#### PASS 23 minutes
### 2025-05-22
#### PASS 23 minutes
### 2025-05-23
#### PASS 28 minutes
### 2025-05-24
#### PASS 30 minutes
### 2025-05-25
#### PASS 24 minutes
### 2025-05-26
#### PASS 24 minutes
### 2025-05-27
#### PASS 25 minutes
### 2025-05-28
#### PASS 46 minutes
#### PASS 23 minutes
### 2025-05-29
#### PASS 23 minutes
### 2025-05-30
#### PASS an hour
#### PASS 24 minutes
### 2025-05-31
#### PASS 24 minutes
### 2025-06-01
#### PASS 23 minutes
#### PASS 26 minutes
#### PASS 27 minutes
#### PASS 28 minutes
#### PASS 24 minutes
#### PASS 27 minutes
### 2025-06-02
#### PASS 29 minutes
#### PASS 25 minutes
#### PASS 25 minutes
### 2025-06-03
#### PASS 25 minutes
### 2025-06-04
#### PASS 26 minutes
### 2025-06-05
#### FAIL 3 minutes
```
2025-06-05T00:28:45.5769892Z === RUN   TestAccOutageSimulationCluster_MultiRegion_basic
2025-06-05T00:28:45.5777492Z === CONT  TestAccOutageSimulationCluster_MultiRegion_basic
2025-06-05T00:29:00.5885757Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-06-05T00:29:00.5887342Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:00.588265185Z, ProjectID: 6840e4b9161ca93c1f051d06, Cluster name: test-acc-tf-c-3521181666433296296
2025-06-05T00:32:01.5497463Z === NAME  TestAccOutageSimulationCluster_MultiRegion_basic
2025-06-05T00:32:01.5498129Z     resource_cluster_outage_simulation_test.go:62: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:32:01.5498590Z         
2025-06-05T00:32:01.5500795Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9161ca93c1f051d06/clusters/test-acc-tf-c-3521181666433296296 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:01.5502206Z         
2025-06-05T00:32:01.5502589Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:32:01.5503310Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:32:01.5503971Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:32:01.5504324Z         
2025-06-05T00:32:01.5942547Z --- FAIL: TestAccOutageSimulationCluster_MultiRegion_basic (196.02s)
```
### 2025-06-06
#### PASS 25 minutes
### 2025-06-07
#### PASS 22 minutes
### 2025-06-08
#### PASS 27 minutes
### 2025-06-09
#### PASS 24 minutes
### 2025-06-10
#### PASS 44 minutes
### 2025-06-11
#### PASS 27 minutes
#### PASS 27 minutes
### 2025-06-12
#### PASS 23 minutes
### 2025-06-13
#### PASS 23 minutes
### 2025-06-14
#### PASS an hour
### 2025-06-15
#### PASS 25 minutes
### 2025-06-16
#### PASS 25 minutes
### 2025-06-17
#### PASS 31 minutes
### 2025-06-18
#### PASS 28 minutes
### 2025-06-19
#### PASS 53 minutes
### 2025-06-20
#### PASS 30 minutes
### 2025-06-21
#### PASS 24 minutes
### 2025-06-22
#### PASS 27 minutes
### 2025-06-23
#### PASS 27 minutes
### 2025-06-24
#### PASS 25 minutes
### 2025-06-25
#### PASS 30 minutes
### 2025-06-26
#### PASS 23 minutes
### 2025-06-27
#### PASS 27 minutes
### 2025-06-28
#### PASS 25 minutes
### 2025-06-29
#### PASS 29 minutes
### 2025-06-30
#### PASS 27 minutes
### 2025-07-01
#### PASS 27 minutes
#### PASS 29 minutes
#### PASS 29 minutes
#### PASS 32 minutes
#### PASS 25 minutes
#### PASS 28 minutes
### 2025-07-02
#### PASS 24 minutes
### 2025-07-03
#### PASS 26 minutes
### 2025-07-04
#### PASS 26 minutes
### 2025-07-05
#### PASS 25 minutes
### 2025-07-06
#### PASS 27 minutes
### 2025-07-07
#### PASS 23 minutes
### 2025-07-08
#### PASS 29 minutes
### 2025-07-09
#### PASS 30 minutes