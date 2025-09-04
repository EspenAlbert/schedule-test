# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 36 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 30) FAIL(x 6)
Success rate: 83.33%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-16 01:58](#error-2025-08-16t0158550000) |  | dev | 71.02s
[2025-09-01 00:30](#error-2025-09-01t0030490000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.01s
[2025-09-01 07:49](#error-2025-09-01t0749130000) |  | dev | 85.08s
[2025-09-01 11:01](#error-2025-09-01t1101140000) |  | dev | 87.00s
[2025-09-01 14:54](#error-2025-09-01t1454380000) |  | dev | 77.01s
[2025-09-03 03:28](#error-2025-09-03t0328550000) |  | dev | 486.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 8 minutes
- 2025-08-07 PASS 21 minutes
- 2025-08-08 PASS 6 seconds
- 2025-08-09 PASS 3 minutes
- 2025-08-10 PASS 3 minutes
- 2025-08-11 PASS 33 minutes
- 2025-08-12
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-08-13 PASS 8 minutes
- 2025-08-14 PASS 10 minutes
- 2025-08-15: MISSING
- 2025-08-16

### Error 2025-08-16T01:58:55+00:00
```
2025-08-16T01:58:55.7029117Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-08-16T01:58:55.7036971Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-08-16T01:58:55.7233904Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-08-16T01:58:55.7235212Z     resource_advanced_cluster_test.go:1466: Step 2/3 error: Error running apply: exit status 1
2025-08-16T01:58:55.7235954Z         
2025-08-16T01:58:55.7237435Z         Error: error creating flex cluster: Cluster name test-acc-tf-c-1030234360689969470 (project_id=689fd09eabb59e7daa2cd1cc).
2025-08-16T01:58:55.7238368Z         
2025-08-16T01:58:55.7238936Z           with mongodbatlas_advanced_cluster.test,
2025-08-16T01:58:55.7240091Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-08-16T01:58:55.7241138Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-08-16T01:58:55.7241672Z         
2025-08-16T01:58:55.7242634Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/689fd09eabb59e7daa2cd1cc/flexClusters
2025-08-16T01:58:55.7243593Z         POST: HTTP 400 Bad Request (Error code:
2025-08-16T01:58:55.7244525Z         "CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP") Detail: A transient error
2025-08-16T01:58:55.7245657Z         occurred. Please try again in a minute or use a different name. Reason: Bad
2025-08-16T01:58:55.7246818Z         Request. Params: [A transient error occurred. Please try again in a minute or
2025-08-16T01:58:55.7247873Z         use a different name.], BadRequestDetail: 
2025-08-16T01:58:55.7248652Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (71.16s)
```

- 2025-08-17 PASS 3 minutes
- 2025-08-18 PASS 9 minutes
- 2025-08-19 PASS 3 minutes
- 2025-08-20
  - PASS 7 minutes
  - PASS 3 minutes
- 2025-08-21 PASS 3 minutes
- 2025-08-22: MISSING
- 2025-08-23 PASS 3 minutes
- 2025-08-24 PASS 2 minutes
- 2025-08-25 PASS 14 minutes
- 2025-08-26 PASS 3 minutes
- 2025-08-27 PASS 15 minutes
- 2025-08-28 PASS 3 minutes
- 2025-08-29: MISSING
- 2025-08-30 PASS 8 minutes
- 2025-08-31 PASS 6 minutes
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:49+00:00
```
2025-09-01T00:30:49.7518092Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T00:30:49.7518492Z     shared_resource.go:93: 
2025-09-01T00:30:49.7519352Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:49.7521044Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:93
2025-09-01T00:30:49.7523012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:212
2025-09-01T00:30:49.7524708Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:92
2025-09-01T00:30:49.7526412Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:103
2025-09-01T00:30:49.7528358Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:1439
2025-09-01T00:30:49.7529173Z         	Error:      	Received unexpected error:
2025-09-01T00:30:49.7532117Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7533503Z         	Test:       	TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T00:30:49.7535737Z         	Messages:   	Project creation failed: test-acc-tf-p-3865262563354261818, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:49.7537359Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (0.15s)
```

  - FAIL a minute

### Error 2025-09-01T07:49:13+00:00
```
2025-09-01T07:49:13.6689862Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T07:49:13.6720322Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T07:49:13.6972734Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T07:49:13.6973357Z     resource_advanced_cluster_test.go:1467: Step 2/3 error: Error running apply: exit status 1
2025-09-01T07:49:13.6973764Z         
2025-09-01T07:49:13.6974434Z         Error: error creating flex cluster: Cluster name test-acc-tf-c-6088972807162037253 (project_id=68b536137af6b0372e983b57).
2025-09-01T07:49:13.6974947Z         
2025-09-01T07:49:13.6975569Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T07:49:13.6976423Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T07:49:13.6977095Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T07:49:13.6977433Z         
2025-09-01T07:49:13.6978073Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b536137af6b0372e983b57/flexClusters
2025-09-01T07:49:13.6978667Z         POST: HTTP 400 Bad Request (Error code:
2025-09-01T07:49:13.6979457Z         "CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP") Detail: A transient error
2025-09-01T07:49:13.6980194Z         occurred. Please try again in a minute or use a different name. Reason: Bad
2025-09-01T07:49:13.6980937Z         Request. Params: [A transient error occurred. Please try again in a minute or
2025-09-01T07:49:13.6981553Z         use a different name.], BadRequestDetail: 
2025-09-01T07:49:13.6982261Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (85.84s)
```

  - FAIL a minute

### Error 2025-09-01T11:01:14+00:00
```
2025-09-01T11:01:14.4508472Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T11:01:14.4534530Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T11:01:14.4668704Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T11:01:14.4669326Z     resource_advanced_cluster_test.go:1467: Step 2/3 error: Error running apply: exit status 1
2025-09-01T11:01:14.4669930Z         
2025-09-01T11:01:14.4670612Z         Error: error creating flex cluster: Cluster name test-acc-tf-c-8599886993016247580 (project_id=68b551fbe551ff23b4098ade).
2025-09-01T11:01:14.4671130Z         
2025-09-01T11:01:14.4671452Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T11:01:14.4672087Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T11:01:14.4672880Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T11:01:14.4673192Z         
2025-09-01T11:01:14.4673725Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b551fbe551ff23b4098ade/flexClusters
2025-09-01T11:01:14.4674267Z         POST: HTTP 400 Bad Request (Error code:
2025-09-01T11:01:14.4674775Z         "CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP") Detail: A transient error
2025-09-01T11:01:14.4675389Z         occurred. Please try again in a minute or use a different name. Reason: Bad
2025-09-01T11:01:14.4676024Z         Request. Params: [A transient error occurred. Please try again in a minute or
2025-09-01T11:01:14.4676517Z         use a different name.], BadRequestDetail: 
2025-09-01T11:01:14.4676958Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (87.04s)
```

  - PASS 9 minutes
  - PASS 10 minutes
  - FAIL a minute

### Error 2025-09-01T14:54:38+00:00
```
2025-09-01T14:54:38.2977004Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T14:54:38.3000295Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T14:54:38.3086818Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-01T14:54:38.3087430Z     resource_advanced_cluster_test.go:1467: Step 2/3 error: Error running apply: exit status 1
2025-09-01T14:54:38.3087871Z         
2025-09-01T14:54:38.3088536Z         Error: error creating flex cluster: Cluster name test-acc-tf-c-5232035231696522432 (project_id=68b5a2b8172c12661187585b).
2025-09-01T14:54:38.3089047Z         
2025-09-01T14:54:38.3089362Z           with mongodbatlas_advanced_cluster.test,
2025-09-01T14:54:38.3089989Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-09-01T14:54:38.3090559Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-09-01T14:54:38.3090857Z         
2025-09-01T14:54:38.3091372Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b5a2b8172c12661187585b/flexClusters
2025-09-01T14:54:38.3091898Z         POST: HTTP 400 Bad Request (Error code:
2025-09-01T14:54:38.3092543Z         "CONTAINER_WAITING_FOR_FAST_RECORD_CLEAN_UP") Detail: A transient error
2025-09-01T14:54:38.3093156Z         occurred. Please try again in a minute or use a different name. Reason: Bad
2025-09-01T14:54:38.3093787Z         Request. Params: [A transient error occurred. Please try again in a minute or
2025-09-01T14:54:38.3094270Z         use a different name.], BadRequestDetail: 
2025-09-01T14:54:38.3094705Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (77.13s)
```

  - PASS 10 minutes
  - PASS 2 minutes
- 2025-09-02 PASS 12 minutes
- 2025-09-03

### Error 2025-09-03T03:28:55+00:00
```
2025-09-03T03:28:55.8728921Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-03T03:28:55.8735184Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-03T03:28:55.8824697Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex
2025-09-03T03:28:55.8825750Z     resource_advanced_cluster_test.go:1467: Step 3/3 error running import: ImportStateVerify attributes not equivalent. Difference is shown below. The - symbol indicates attributes missing after import.
2025-09-03T03:28:55.8826493Z         
2025-09-03T03:28:55.8827084Z         Â Â map[string]string{
2025-09-03T03:28:55.8827490Z         -Â 	"connection_strings.standard":     "",
2025-09-03T03:28:55.8829393Z         +Â 	"connection_strings.standard":     "mongodb://test-acc-tf-c-330564775-shard-00-00.e6g60v.mongodb-dev.net:27017,test-acc-tf-c-330564775-shard-00-01.e6g60v.mongodb-dev.net:27017,test-acc-tf-c-330564775-shard-00-02.e6g60v.mongodb-dev.net:27017/?ssl=true&authSource=admin&replicaSet=atlas-71swrx-"...,
2025-09-03T03:28:55.8830653Z         -Â 	"connection_strings.standard_srv": "",
2025-09-03T03:28:55.8831414Z         +Â 	"connection_strings.standard_srv": "mongodb+srv://test-acc-tf-c-330564775.e6g60v.mongodb-dev.net",
2025-09-03T03:28:55.8831915Z         Â Â }
2025-09-03T03:28:55.8832263Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateFlex (486.59s)
```

- 2025-09-04 PASS 10 minutes