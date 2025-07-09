# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_biConnectorConfig Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 115) FAIL(x 2)
Success rate: 98.29%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.00s
2025-06-05 00:35 | dev | 70.08s

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
### 2025-04-10
#### PASS 20 minutes
### 2025-04-11
#### PASS 15 minutes
### 2025-04-12
#### PASS 14 minutes
### 2025-04-13
#### PASS 17 minutes
### 2025-04-14
#### PASS 15 minutes
### 2025-04-15
#### PASS 32 minutes
### 2025-04-16
#### PASS 19 minutes
#### PASS 18 minutes
### 2025-04-17
#### PASS 16 minutes
### 2025-04-18
#### PASS 15 minutes
### 2025-04-19
#### PASS 16 minutes
### 2025-04-20
#### PASS 17 minutes
### 2025-04-21
#### PASS 20 minutes
### 2025-04-22
#### PASS 11 minutes
### 2025-04-23
#### PASS 20 minutes
### 2025-04-24
#### PASS 15 minutes
### 2025-04-25
#### PASS 17 minutes
### 2025-04-26
#### PASS 18 minutes
### 2025-04-27
#### PASS 19 minutes
### 2025-04-28
#### PASS 13 minutes
### 2025-04-29
#### PASS 17 minutes
### 2025-04-30
#### PASS 13 minutes
### 2025-05-01
#### PASS 15 minutes
#### PASS 19 minutes
#### PASS 14 minutes
#### PASS 21 minutes
#### PASS 17 minutes
#### PASS 15 minutes
#### PASS 13 minutes
### 2025-05-02
#### PASS 22 minutes
### 2025-05-03
#### PASS 15 minutes
### 2025-05-04
#### PASS 15 minutes
### 2025-05-05
#### PASS 17 minutes
### 2025-05-06
#### PASS 17 minutes
### 2025-05-07
#### PASS 15 minutes
### 2025-05-08
#### PASS 17 minutes
### 2025-05-09
#### PASS 18 minutes
### 2025-05-10
#### PASS 16 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.8079140Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-11T00:30:01.8079500Z     shared_resource.go:84: 
2025-05-11T00:30:01.8080382Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8082351Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8084132Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8085881Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8087882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1121
2025-05-11T00:30:01.8088720Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8089588Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8090205Z         	Test:       	TestAccClusterAdvancedCluster_biConnectorConfig
2025-05-11T00:30:01.8091335Z         	Messages:   	Project creation failed: test-acc-tf-p-9078794372544239580, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8092063Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (0.02s)
```
### 2025-05-12
#### PASS 15 minutes
### 2025-05-13
#### PASS 14 minutes
#### PASS 13 minutes
### 2025-05-14
#### PASS 15 minutes
### 2025-05-15
#### PASS 18 minutes
### 2025-05-16
#### PASS 16 minutes
### 2025-05-17
#### PASS 16 minutes
### 2025-05-18
#### PASS 18 minutes
### 2025-05-19
#### PASS 19 minutes
### 2025-05-20
#### PASS 14 minutes
### 2025-05-21
#### PASS 16 minutes
#### PASS 13 minutes
### 2025-05-22
#### PASS 14 minutes
### 2025-05-23
#### PASS 26 minutes
### 2025-05-24
#### PASS 15 minutes
### 2025-05-25
#### PASS 19 minutes
### 2025-05-26
#### PASS 14 minutes
### 2025-05-27
#### PASS 14 minutes
### 2025-05-28
#### PASS 14 minutes
#### PASS 15 minutes
#### PASS 17 minutes
### 2025-05-29
#### PASS 24 minutes
### 2025-05-30
#### PASS 47 minutes
#### PASS 24 minutes
### 2025-05-31
#### PASS 17 minutes
### 2025-06-01
#### PASS 13 minutes
#### PASS 15 minutes
#### PASS 13 minutes
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-06-02
#### PASS 15 minutes
#### PASS 18 minutes
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-06-03
#### PASS 16 minutes
### 2025-06-04
#### PASS 16 minutes
### 2025-06-05
#### FAIL a minute
```
2025-06-05T00:35:38.5906161Z === RUN   TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-05T00:35:38.5952290Z === CONT  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-05T00:35:38.6775055Z === NAME  TestAccClusterAdvancedCluster_biConnectorConfig
2025-06-05T00:35:38.6775690Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:30:36.025520453Z, ProjectID: 6840e4dcc939f274132517a4, Cluster name: test-acc-tf-c-1693418331965637851
2025-06-05T00:35:38.6781505Z   
2025-06-05T00:35:38.6781849Z     resource_advanced_cluster_test.go:1126: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6782047Z         
2025-06-05T00:35:38.6782198Z         Error: Error in create
2025-06-05T00:35:38.6782283Z         
2025-06-05T00:35:38.6782515Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6782957Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6783227Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6783316Z         
2025-06-05T00:35:38.6783630Z         cluster name: test-acc-tf-c-1693418331965637851, API error details:
2025-06-05T00:35:38.6784029Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4dcc939f274132517a4/clusters
2025-06-05T00:35:38.6784386Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6784676Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6784815Z         BadRequestDetail: 
2025-06-05T00:35:38.6785013Z --- FAIL: TestAccClusterAdvancedCluster_biConnectorConfig (70.80s)
```
### 2025-06-06
#### PASS 21 minutes
### 2025-06-07
#### PASS 13 minutes
### 2025-06-08
#### PASS 17 minutes
### 2025-06-09
#### PASS 15 minutes
### 2025-06-10
#### PASS 21 minutes
### 2025-06-11
#### PASS 16 minutes
#### PASS 16 minutes
### 2025-06-12
#### PASS 18 minutes
### 2025-06-13
#### PASS 16 minutes
### 2025-06-14
#### PASS 28 minutes
### 2025-06-15
#### PASS 15 minutes
### 2025-06-16
#### PASS 16 minutes
### 2025-06-17
#### PASS 15 minutes
### 2025-06-18
#### PASS 20 minutes
#### PASS 14 minutes
### 2025-06-19
#### PASS 44 minutes
### 2025-06-20
#### PASS 16 minutes
### 2025-06-21
#### PASS 15 minutes
### 2025-06-22
#### PASS 17 minutes
### 2025-06-23
#### PASS 14 minutes
### 2025-06-24
#### PASS 23 minutes
### 2025-06-25
#### PASS 14 minutes
### 2025-06-26
#### PASS 20 minutes
#### PASS 13 minutes
### 2025-06-27
#### PASS 15 minutes
### 2025-06-28
#### PASS 19 minutes
### 2025-06-29
#### PASS 17 minutes
### 2025-06-30
#### PASS 16 minutes
### 2025-07-01
#### PASS 15 minutes
#### PASS 15 minutes
#### PASS 14 minutes
#### PASS 17 minutes
#### PASS 15 minutes
### 2025-07-02
#### PASS 16 minutes
### 2025-07-03
#### PASS 13 minutes
### 2025-07-04
#### PASS 20 minutes
### 2025-07-05
#### PASS 15 minutes
### 2025-07-06
#### PASS 15 minutes
### 2025-07-07
#### PASS 14 minutes
### 2025-07-08
#### PASS 16 minutes
### 2025-07-09
#### PASS 14 minutes