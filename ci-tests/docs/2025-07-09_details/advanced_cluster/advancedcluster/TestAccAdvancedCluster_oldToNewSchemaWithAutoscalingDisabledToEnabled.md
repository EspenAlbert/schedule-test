# advanced_cluster/advancedcluster/TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled Test Details
# Found 116 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 2)
Success rate: 98.28%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-05-11 00:30 | qa | 0.01s
2025-06-05 00:35 | dev | 258.03s

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
#### PASS 23 minutes
### 2025-04-11
#### PASS 22 minutes
### 2025-04-12
#### PASS 22 minutes
### 2025-04-13
#### PASS 34 minutes
### 2025-04-14
#### PASS 19 minutes
### 2025-04-15
#### PASS 31 minutes
### 2025-04-16
#### PASS 21 minutes
#### PASS 27 minutes
### 2025-04-17
#### PASS 22 minutes
### 2025-04-18
#### PASS 23 minutes
### 2025-04-19
#### PASS 22 minutes
### 2025-04-20
#### PASS 23 minutes
### 2025-04-21
#### PASS 22 minutes
### 2025-04-22
#### PASS 21 minutes
### 2025-04-23
#### PASS 24 minutes
### 2025-04-24
#### PASS 20 minutes
### 2025-04-25
#### PASS 23 minutes
### 2025-04-26
#### PASS 22 minutes
### 2025-04-27
#### PASS 22 minutes
### 2025-04-28
#### PASS 20 minutes
### 2025-04-29
#### PASS 20 minutes
### 2025-04-30
#### PASS 26 minutes
### 2025-05-01
#### PASS 21 minutes
#### PASS 22 minutes
#### PASS 21 minutes
#### PASS 22 minutes
#### PASS 18 minutes
#### PASS 20 minutes
#### PASS 21 minutes
### 2025-05-02
#### PASS 26 minutes
### 2025-05-03
#### PASS 22 minutes
### 2025-05-04
#### PASS 20 minutes
### 2025-05-05
#### PASS 20 minutes
### 2025-05-06
#### PASS 22 minutes
### 2025-05-07
#### PASS 18 minutes
### 2025-05-08
#### PASS 19 minutes
### 2025-05-09
#### PASS 25 minutes
### 2025-05-10
#### PASS 17 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:11.0959824Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-11T00:30:11.1569441Z     shared_resource.go:84: 
2025-05-11T00:30:11.1571325Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:11.1573657Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:11.1575588Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:11.1577432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:11.1579545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1216
2025-05-11T00:30:11.1580420Z         	Error:      	Received unexpected error:
2025-05-11T00:30:11.1581429Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:11.1582194Z         	Test:       	TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-05-11T00:30:11.1583399Z         	Messages:   	Project creation failed: test-acc-tf-p-4846216165749920114, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:11.1584270Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (0.06s)
```
### 2025-05-12
#### PASS 20 minutes
### 2025-05-13
#### PASS 23 minutes
#### PASS 21 minutes
### 2025-05-14
#### PASS 23 minutes
### 2025-05-15
#### PASS 19 minutes
### 2025-05-16
#### PASS 19 minutes
### 2025-05-17
#### PASS 22 minutes
### 2025-05-18
#### PASS 18 minutes
### 2025-05-19
#### PASS 23 minutes
### 2025-05-20
#### PASS 23 minutes
### 2025-05-21
#### PASS 23 minutes
### 2025-05-22
#### PASS 23 minutes
### 2025-05-23
#### PASS 33 minutes
### 2025-05-24
#### PASS 22 minutes
### 2025-05-25
#### PASS 22 minutes
### 2025-05-26
#### PASS 26 minutes
### 2025-05-27
#### PASS 22 minutes
### 2025-05-28
#### PASS 22 minutes
#### PASS 23 minutes
#### PASS 23 minutes
### 2025-05-29
#### PASS 32 minutes
#### PASS 20 minutes
### 2025-05-30
#### PASS an hour
#### PASS 24 minutes
### 2025-05-31
#### PASS 24 minutes
### 2025-06-01
#### PASS 24 minutes
#### PASS 21 minutes
#### PASS 22 minutes
#### PASS 22 minutes
#### PASS 22 minutes
#### PASS 22 minutes
### 2025-06-02
#### PASS 25 minutes
#### PASS 30 minutes
#### PASS 23 minutes
### 2025-06-03
#### PASS 24 minutes
### 2025-06-04
#### PASS 23 minutes
### 2025-06-05
#### FAIL 4 minutes
```
2025-06-05T00:35:39.9469738Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-05T00:35:42.8423426Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-05T00:36:57.8240710Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-05T00:36:57.8243071Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:36:57.82371207Z, ProjectID: 6840e65c161ca93c1f0545a9, Cluster name: test-acc-tf-c-357689797898515496
2025-06-05T00:39:58.9867570Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled
2025-06-05T00:39:58.9868405Z     resource_advanced_cluster_test.go:1221: Step 1/4 error: Error running apply: exit status 1
2025-06-05T00:39:58.9868888Z         
2025-06-05T00:39:58.9870997Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e65c161ca93c1f0545a9/clusters/test-acc-tf-c-357689797898515496 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:39:58.9872179Z         
2025-06-05T00:39:58.9872505Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:39:58.9873161Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:39:58.9873748Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:39:58.9874053Z         
2025-06-05T00:39:59.0371292Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingDisabledToEnabled (258.27s)
```
### 2025-06-06
#### PASS 32 minutes
### 2025-06-07
#### PASS 20 minutes
### 2025-06-08
#### PASS 19 minutes
### 2025-06-09
#### PASS 29 minutes
### 2025-06-10
#### PASS 18 minutes
### 2025-06-11
#### PASS 22 minutes
#### PASS 21 minutes
### 2025-06-12
#### PASS 24 minutes
### 2025-06-13
#### PASS 25 minutes
### 2025-06-14
#### PASS 37 minutes
### 2025-06-15
#### PASS 20 minutes
### 2025-06-16
#### PASS 23 minutes
### 2025-06-17
#### PASS 21 minutes
### 2025-06-18
#### PASS 25 minutes
#### PASS 21 minutes
### 2025-06-19
#### PASS 48 minutes
### 2025-06-20
#### PASS 22 minutes
### 2025-06-21
#### PASS 23 minutes
### 2025-06-22
#### PASS 31 minutes
### 2025-06-23
#### PASS 21 minutes
### 2025-06-24
#### PASS 20 minutes
### 2025-06-25
#### PASS 19 minutes
### 2025-06-26
#### PASS 22 minutes
### 2025-06-27
#### PASS 19 minutes
### 2025-06-28
#### PASS 23 minutes
### 2025-06-29
#### PASS 24 minutes
### 2025-06-30
#### PASS 20 minutes
### 2025-07-01
#### PASS 21 minutes
#### PASS 21 minutes
#### PASS 22 minutes
#### PASS 20 minutes
#### PASS 22 minutes
### 2025-07-02
#### PASS 18 minutes
### 2025-07-03
#### PASS 22 minutes
### 2025-07-04
#### PASS 21 minutes
### 2025-07-05
#### PASS 21 minutes
### 2025-07-06
#### PASS 18 minutes
### 2025-07-07
#### PASS 19 minutes
### 2025-07-08
#### PASS 20 minutes
### 2025-07-09
#### PASS 20 minutes