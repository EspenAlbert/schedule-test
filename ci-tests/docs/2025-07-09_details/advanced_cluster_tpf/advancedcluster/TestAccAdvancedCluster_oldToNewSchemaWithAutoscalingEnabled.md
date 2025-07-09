# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled Test Details
# Found 117 TestRuns in dev, qa from 2025-04-10 to 2025-07-09 from master branch: 1 unique tests, PASS(x 114) FAIL(x 3)
Success rate: 97.44%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-17 01:46 | dev | 843.01s
2025-05-11 00:30 | qa | 0.00s
2025-06-05 00:35 | dev | 65.08s

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
#### PASS 21 minutes
### 2025-04-11
#### PASS 22 minutes
### 2025-04-12
#### PASS 17 minutes
### 2025-04-13
#### PASS 37 minutes
### 2025-04-14
#### PASS 15 minutes
### 2025-04-15
#### PASS 34 minutes
### 2025-04-16
#### PASS 19 minutes
#### PASS 19 minutes
### 2025-04-17
#### FAIL 14 minutes
```
2025-04-17T01:46:11.2545310Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-04-17T01:46:11.2566980Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-04-17T01:46:11.2612334Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-04-17T01:46:11.2613237Z     pre_check.go:40: Time before creating cluster: 2025-04-17T00:53:50.788047709Z, ProjectID: 6800508f15370f3077a472be, Cluster name: test-acc-tf-c-7231339838540252186
2025-04-17T01:46:11.3153824Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-04-17T01:46:11.3154849Z     resource_advanced_cluster_test.go:1197: Step 1/3 error: Error running post-apply non-refresh plan: exit status 1
2025-04-17T01:46:11.3155421Z         
2025-04-17T01:46:11.3155758Z         Error: error reading  advanced cluster list
2025-04-17T01:46:11.3156319Z         
2025-04-17T01:46:11.3156683Z           with data.mongodbatlas_advanced_clusters.test,
2025-04-17T01:46:11.3157450Z           on terraform_plugin_test.tf line 50, in data "mongodbatlas_advanced_clusters" "test":
2025-04-17T01:46:11.3158117Z           50: 	data "mongodbatlas_advanced_clusters" "test" {
2025-04-17T01:46:11.3158417Z         
2025-04-17T01:46:11.3158718Z         project ID 6800508f15370f3077a472be. Error
2025-04-17T01:46:11.3159322Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6800508f15370f3077a472be/clusters
2025-04-17T01:46:11.3159999Z         GET: HTTP 404 Not Found (Error code: "CLUSTER_NOT_FOUND") Detail: No cluster
2025-04-17T01:46:11.3160568Z         named test-acc-tf-c-4616679300993018385 exists in group
2025-04-17T01:46:11.3161141Z         6800508f15370f3077a472be. Reason: Not Found. Params:
2025-04-17T01:46:11.3161701Z         [test-acc-tf-c-4616679300993018385 6800508f15370f3077a472be],
2025-04-17T01:46:11.3162104Z         BadRequestDetail: 
2025-04-17T01:46:11.3490169Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (843.07s)
```
### 2025-04-18
#### PASS 26 minutes
### 2025-04-19
#### PASS 21 minutes
### 2025-04-20
#### PASS 21 minutes
### 2025-04-21
#### PASS 19 minutes
### 2025-04-22
#### PASS 18 minutes
### 2025-04-23
#### PASS 19 minutes
### 2025-04-24
#### PASS 14 minutes
### 2025-04-25
#### PASS 19 minutes
### 2025-04-26
#### PASS 18 minutes
### 2025-04-27
#### PASS 19 minutes
### 2025-04-28
#### PASS 17 minutes
### 2025-04-29
#### PASS 16 minutes
### 2025-04-30
#### PASS 17 minutes
### 2025-05-01
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 16 minutes
#### PASS 21 minutes
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 15 minutes
### 2025-05-02
#### PASS 21 minutes
### 2025-05-03
#### PASS 16 minutes
### 2025-05-04
#### PASS 16 minutes
### 2025-05-05
#### PASS 17 minutes
### 2025-05-06
#### PASS 22 minutes
### 2025-05-07
#### PASS 17 minutes
### 2025-05-08
#### PASS 17 minutes
### 2025-05-09
#### PASS 18 minutes
### 2025-05-10
#### PASS 17 minutes
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:30:01.8093675Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-05-11T00:30:01.8094076Z     shared_resource.go:84: 
2025-05-11T00:30:01.8095090Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.8096839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.8098601Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.8100337Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.8102527Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1195
2025-05-11T00:30:01.8103348Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.8104222Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8105019Z         	Test:       	TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-05-11T00:30:01.8106098Z         	Messages:   	Project creation failed: test-acc-tf-p-620462519085100118, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.8106874Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (0.02s)
```
### 2025-05-12
#### PASS 17 minutes
### 2025-05-13
#### PASS 15 minutes
#### PASS 16 minutes
### 2025-05-14
#### PASS 17 minutes
### 2025-05-15
#### PASS 19 minutes
### 2025-05-16
#### PASS 17 minutes
### 2025-05-17
#### PASS 17 minutes
### 2025-05-18
#### PASS 17 minutes
### 2025-05-19
#### PASS 15 minutes
### 2025-05-20
#### PASS 18 minutes
### 2025-05-21
#### PASS 15 minutes
#### PASS 14 minutes
### 2025-05-22
#### PASS 17 minutes
### 2025-05-23
#### PASS 19 minutes
### 2025-05-24
#### PASS 15 minutes
### 2025-05-25
#### PASS 18 minutes
### 2025-05-26
#### PASS 16 minutes
### 2025-05-27
#### PASS 15 minutes
### 2025-05-28
#### PASS 17 minutes
#### PASS 16 minutes
#### PASS 17 minutes
### 2025-05-29
#### PASS 23 minutes
### 2025-05-30
#### PASS 48 minutes
#### PASS 24 minutes
### 2025-05-31
#### PASS 19 minutes
### 2025-06-01
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 18 minutes
#### PASS 16 minutes
#### PASS 16 minutes
### 2025-06-02
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 17 minutes
#### PASS 16 minutes
### 2025-06-03
#### PASS 20 minutes
### 2025-06-04
#### PASS 15 minutes
### 2025-06-05
#### FAIL a minute
```
2025-06-05T00:35:38.5908316Z === RUN   TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-06-05T00:35:38.5951286Z === CONT  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-06-05T00:35:38.6764550Z === NAME  TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-06-05T00:35:38.6765186Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:30:31.024253789Z, ProjectID: 6840e4dcc939f274132517a4, Cluster name: test-acc-tf-c-8915646126835148149
2025-06-05T00:35:38.6771380Z    test_name=TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled
2025-06-05T00:35:38.6771729Z     resource_advanced_cluster_test.go:1200: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6771830Z         
2025-06-05T00:35:38.6772005Z         Error: Error in create (legacy)
2025-06-05T00:35:38.6772092Z         
2025-06-05T00:35:38.6772319Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6772766Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6773037Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6773128Z         
2025-06-05T00:35:38.6773444Z         cluster name: test-acc-tf-c-8915646126835148149, API error details:
2025-06-05T00:35:38.6773854Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4dcc939f274132517a4/clusters
2025-06-05T00:35:38.6774206Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6774497Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6774640Z         BadRequestDetail: 
2025-06-05T00:35:38.6774886Z --- FAIL: TestAccAdvancedCluster_oldToNewSchemaWithAutoscalingEnabled (65.83s)
```
### 2025-06-06
#### PASS 22 minutes
### 2025-06-07
#### PASS 18 minutes
### 2025-06-08
#### PASS 17 minutes
### 2025-06-09
#### PASS 48 minutes
### 2025-06-10
#### PASS 23 minutes
### 2025-06-11
#### PASS 17 minutes
#### PASS 18 minutes
### 2025-06-12
#### PASS 17 minutes
### 2025-06-13
#### PASS 19 minutes
### 2025-06-14
#### PASS 32 minutes
### 2025-06-15
#### PASS 19 minutes
### 2025-06-16
#### PASS 19 minutes
### 2025-06-17
#### PASS 16 minutes
### 2025-06-18
#### PASS 20 minutes
#### PASS 16 minutes
### 2025-06-19
#### PASS 50 minutes
### 2025-06-20
#### PASS 19 minutes
### 2025-06-21
#### PASS 17 minutes
### 2025-06-22
#### PASS 16 minutes
### 2025-06-23
#### PASS 16 minutes
### 2025-06-24
#### PASS 23 minutes
### 2025-06-25
#### PASS 15 minutes
### 2025-06-26
#### PASS 22 minutes
#### PASS 16 minutes
### 2025-06-27
#### PASS 21 minutes
### 2025-06-28
#### PASS 19 minutes
### 2025-06-29
#### PASS 21 minutes
### 2025-06-30
#### PASS 18 minutes
### 2025-07-01
#### PASS 18 minutes
#### PASS 18 minutes
#### PASS 16 minutes
#### PASS 16 minutes
#### PASS 22 minutes
### 2025-07-02
#### PASS 18 minutes
### 2025-07-03
#### PASS 16 minutes
### 2025-07-04
#### PASS 18 minutes
### 2025-07-05
#### PASS 16 minutes
### 2025-07-06
#### PASS 16 minutes
### 2025-07-07
#### PASS 19 minutes
### 2025-07-08
#### PASS 20 minutes
### 2025-07-09
#### PASS 16 minutes