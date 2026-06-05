# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_iss Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 8)
Success rate: 73.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-15 00:56](#error-2026-05-15t0056440000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a066f4abf5881c97de57abd/clusters | dev | out_of_capacity | 20.07s
[2026-05-16 00:53](#error-2026-05-16t0053510000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a07c01c8f63c00f867d0f76/clusters | dev | out_of_capacity | 10.08s
[2026-05-18 01:00](#error-2026-05-18t0100180000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a0a64a0dece59bebe1034e9/clusters | dev | out_of_capacity | 20.08s
[2026-05-19 01:03](#error-2026-05-19t0103240000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a0bb6dc04055db6de68e255/clusters | dev | out_of_capacity | 81.01s
[2026-05-20 01:02](#error-2026-05-20t0102570000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a0d083eb1175fa9274627ef/clusters | dev | out_of_capacity | 20.08s
[2026-05-21 01:02](#error-2026-05-21t0102430000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6a0e59af29c1c445d4180d9b/clusters | dev | out_of_capacity | 10.09s
[2026-05-23 01:01](#error-2026-05-23t0101210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-05-28 00:59](#error-2026-05-28t0059180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 46 minutes
- 2026-05-08 PASS 27 minutes
- 2026-05-09 PASS 21 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 26 minutes
- 2026-05-12 PASS 29 minutes
- 2026-05-13 PASS 23 minutes
- 2026-05-14 PASS 36 minutes
- 2026-05-15

### Error 2026-05-15T00:56:44+00:00
```
2026-05-15T00:56:44.9632972Z === RUN   TestAccGlobalClusterConfig_iss
2026-05-15T01:22:18.7650145Z === CONT  TestAccGlobalClusterConfig_iss
2026-05-15T01:22:38.7767712Z === NAME  TestAccGlobalClusterConfig_iss
2026-05-15T01:22:38.7771364Z     pre_check.go:46: Time before creating cluster: 2026-05-15T01:22:38.776385006Z, ProjectID: 6a066f4abf5881c97de57abd, Cluster name: test-acc-tf-c-6237916133833312286
2026-05-15T01:22:39.4518725Z    test_terraform_path=/home/runner/work/_temp/8df6fa71-8e1e-4027-9198-fb57aa740d1b/terraform test_step_number=1
2026-05-15T01:22:39.4519980Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-15T01:22:39.4520690Z         
2026-05-15T01:22:39.4521072Z         Error: Error in create
2026-05-15T01:22:39.4521457Z         
2026-05-15T01:22:39.4521976Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-05-15T01:22:39.4522845Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-05-15T01:22:39.4523655Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-05-15T01:22:39.4524015Z         
2026-05-15T01:22:39.4524586Z         cluster name: test-acc-tf-c-6237916133833312286, API error details:
2026-05-15T01:22:39.4525622Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f4abf5881c97de57abd/clusters
2026-05-15T01:22:39.4526317Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-15T01:22:39.4526969Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-15T01:22:39.4527480Z         Conflict. Params: [], BadRequestDetail: 
2026-05-15T01:22:39.5054315Z --- FAIL: TestAccGlobalClusterConfig_iss (20.74s)
```

- 2026-05-16

### Error 2026-05-16T00:53:51+00:00
```
2026-05-16T00:53:51.5503093Z === RUN   TestAccGlobalClusterConfig_iss
2026-05-16T01:15:42.9936617Z === CONT  TestAccGlobalClusterConfig_iss
2026-05-16T01:15:52.9995353Z === NAME  TestAccGlobalClusterConfig_iss
2026-05-16T01:15:52.9996603Z     pre_check.go:46: Time before creating cluster: 2026-05-16T01:15:52.999234812Z, ProjectID: 6a07c01c8f63c00f867d0f76, Cluster name: test-acc-tf-c-4592439085775812889
2026-05-16T01:15:53.7621397Z    test_name=TestAccGlobalClusterConfig_iss test_terraform_path=/home/runner/work/_temp/42c441d7-f269-48a0-b6fe-26b7e86be9d1/terraform
2026-05-16T01:15:53.7622412Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-16T01:15:53.7622810Z         
2026-05-16T01:15:53.7623066Z         Error: Error in create
2026-05-16T01:15:53.7623347Z         
2026-05-16T01:15:53.7623915Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-05-16T01:15:53.7624584Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-05-16T01:15:53.7625124Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-05-16T01:15:53.7625514Z         
2026-05-16T01:15:53.7625901Z         cluster name: test-acc-tf-c-4592439085775812889, API error details:
2026-05-16T01:15:53.7626522Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a07c01c8f63c00f867d0f76/clusters
2026-05-16T01:15:53.7627060Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-16T01:15:53.7627570Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-16T01:15:53.7627967Z         Conflict. Params: [], BadRequestDetail: 
2026-05-16T01:15:53.8028462Z --- FAIL: TestAccGlobalClusterConfig_iss (10.81s)
```

- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:00:18+00:00
```
2026-05-18T01:00:18.5175129Z === RUN   TestAccGlobalClusterConfig_iss
2026-05-18T01:49:34.7311449Z === CONT  TestAccGlobalClusterConfig_iss
2026-05-18T01:49:54.7419534Z === NAME  TestAccGlobalClusterConfig_iss
2026-05-18T01:49:54.7423099Z     pre_check.go:46: Time before creating cluster: 2026-05-18T01:49:54.741629716Z, ProjectID: 6a0a64a0dece59bebe1034e9, Cluster name: test-acc-tf-c-882780188838909842
2026-05-18T01:49:55.4422211Z    test_step_number=1
2026-05-18T01:49:55.4423217Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-18T01:49:55.4423993Z         
2026-05-18T01:49:55.4424397Z         Error: Error in create
2026-05-18T01:49:55.4424802Z         
2026-05-18T01:49:55.4425430Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-05-18T01:49:55.4426710Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-05-18T01:49:55.4428065Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-05-18T01:49:55.4428642Z         
2026-05-18T01:49:55.4429383Z         cluster name: test-acc-tf-c-882780188838909842, API error details:
2026-05-18T01:49:55.4430572Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0a64a0dece59bebe1034e9/clusters
2026-05-18T01:49:55.4431782Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-18T01:49:55.4432930Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-18T01:49:55.4433802Z         Conflict. Params: [], BadRequestDetail: 
2026-05-18T01:49:55.4933045Z --- FAIL: TestAccGlobalClusterConfig_iss (20.76s)
```

- 2026-05-19

### Error 2026-05-19T01:03:24+00:00
```
2026-05-19T01:03:24.5618824Z === RUN   TestAccGlobalClusterConfig_iss
2026-05-19T01:03:24.5619473Z     resource_global_cluster_config_test.go:53: Creating execution project (1): test-acc-tf-p-755349626062150379
2026-05-19T01:24:25.9197476Z === CONT  TestAccGlobalClusterConfig_iss
2026-05-19T01:24:30.9238745Z     pre_check.go:46: Time before creating cluster: 2026-05-19T01:24:30.923598668Z, ProjectID: 6a0bb6dc04055db6de68e255, Cluster name: test-acc-tf-c-7215893215561770838
2026-05-19T01:24:31.7151662Z    test_terraform_path=/home/runner/work/_temp/7aa16e5a-e67a-4118-b6ae-0e04fc96c063/terraform test_working_directory=/tmp/plugintest3995882219
2026-05-19T01:24:31.7152734Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-19T01:24:31.7153393Z         
2026-05-19T01:24:31.7153651Z         Error: Error in create
2026-05-19T01:24:31.7153907Z         
2026-05-19T01:24:31.7154271Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-05-19T01:24:31.7155009Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-05-19T01:24:31.7155690Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-05-19T01:24:31.7156027Z         
2026-05-19T01:24:31.7156966Z         cluster name: test-acc-tf-c-7215893215561770838, API error details:
2026-05-19T01:24:31.7157694Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0bb6dc04055db6de68e255/clusters
2026-05-19T01:24:31.7158412Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-19T01:24:31.7159068Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-19T01:24:31.7159565Z         Conflict. Params: [], BadRequestDetail: 
2026-05-19T01:24:31.7709838Z --- FAIL: TestAccGlobalClusterConfig_iss (81.14s)
```

- 2026-05-20

### Error 2026-05-20T01:02:57+00:00
```
2026-05-20T01:02:57.0512278Z === RUN   TestAccGlobalClusterConfig_iss
2026-05-20T01:37:40.5760793Z === CONT  TestAccGlobalClusterConfig_iss
2026-05-20T01:38:00.5901924Z === NAME  TestAccGlobalClusterConfig_iss
2026-05-20T01:38:00.5906395Z     pre_check.go:46: Time before creating cluster: 2026-05-20T01:38:00.589945084Z, ProjectID: 6a0d083eb1175fa9274627ef, Cluster name: test-acc-tf-c-2089888205918693229
2026-05-20T01:38:01.2962627Z    test_name=TestAccGlobalClusterConfig_iss test_terraform_path=/home/runner/work/_temp/4c5d140b-7f16-4d24-be8d-7d93a02cd04e/terraform
2026-05-20T01:38:01.2963907Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-20T01:38:01.2964569Z         
2026-05-20T01:38:01.2964836Z         Error: Error in create
2026-05-20T01:38:01.2965125Z         
2026-05-20T01:38:01.2965501Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-05-20T01:38:01.2966249Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-05-20T01:38:01.2966952Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-05-20T01:38:01.2967604Z         
2026-05-20T01:38:01.2968043Z         cluster name: test-acc-tf-c-2089888205918693229, API error details:
2026-05-20T01:38:01.2968827Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0d083eb1175fa9274627ef/clusters
2026-05-20T01:38:01.2969578Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-20T01:38:01.2970249Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-20T01:38:01.2970773Z         Conflict. Params: [], BadRequestDetail: 
2026-05-20T01:38:01.3466639Z --- FAIL: TestAccGlobalClusterConfig_iss (20.77s)
```

- 2026-05-21

### Error 2026-05-21T01:02:43+00:00
```
2026-05-21T01:02:43.1080793Z === RUN   TestAccGlobalClusterConfig_iss
2026-05-21T01:32:38.2458835Z === CONT  TestAccGlobalClusterConfig_iss
2026-05-21T01:32:48.2464498Z === NAME  TestAccGlobalClusterConfig_iss
2026-05-21T01:32:48.2465998Z     pre_check.go:46: Time before creating cluster: 2026-05-21T01:32:48.246099045Z, ProjectID: 6a0e59af29c1c445d4180d9b, Cluster name: test-acc-tf-c-6473342944045902102
2026-05-21T01:32:49.0823278Z    test_working_directory=/tmp/plugintest2914330123 test_step_number=1 test_terraform_path=/home/runner/work/_temp/fc450158-9ebc-4485-b0c4-3d80f661440e/terraform test_name=TestAccGlobalClusterConfig_iss
2026-05-21T01:32:49.0824449Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-05-21T01:32:49.0825014Z         
2026-05-21T01:32:49.0825280Z         Error: Error in create
2026-05-21T01:32:49.0825636Z         
2026-05-21T01:32:49.0826317Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-05-21T01:32:49.0827326Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-05-21T01:32:49.0828227Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-05-21T01:32:49.0828591Z         
2026-05-21T01:32:49.0829015Z         cluster name: test-acc-tf-c-6473342944045902102, API error details:
2026-05-21T01:32:49.0829702Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0e59af29c1c445d4180d9b/clusters
2026-05-21T01:32:49.0830395Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-05-21T01:32:49.0831054Z         region is currently out of capacity for the requested instance size. Reason:
2026-05-21T01:32:49.0831572Z         Conflict. Params: [], BadRequestDetail: 
2026-05-21T01:32:49.1342261Z --- FAIL: TestAccGlobalClusterConfig_iss (10.89s)
```

- 2026-05-22 PASS 53 minutes
- 2026-05-23

### Error 2026-05-23T01:01:21+00:00
```
2026-05-23T01:01:21.7193556Z === RUN   TestAccGlobalClusterConfig_iss
2026-05-23T01:01:21.7194718Z     resource_global_cluster_config_test.go:53: Creating execution project (1): test-acc-tf-p-6945077745188769008
2026-05-23T01:02:24.6236431Z     resource_global_cluster_config_test.go:53: 
2026-05-23T01:02:24.6238871Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:02:24.6243063Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:02:24.6245713Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:02:24.6247715Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-23T01:02:24.6250122Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:53
2026-05-23T01:02:24.6251846Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:02:24.6252335Z         	Error:      	Received unexpected error:
2026-05-23T01:02:24.6254240Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:24.6255257Z         	Test:       	TestAccGlobalClusterConfig_iss
2026-05-23T01:02:24.6256990Z         	Messages:   	Project creation failed: test-acc-tf-p-6945077745188769008, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:24.6258140Z --- FAIL: TestAccGlobalClusterConfig_iss (62.91s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 23 minutes
- 2026-05-26 PASS 16 minutes
- 2026-05-27 PASS 59 minutes
- 2026-05-28

### Error 2026-05-28T00:59:18+00:00
```
2026-05-28T00:59:18.6517273Z === RUN   TestAccGlobalClusterConfig_iss
2026-05-28T00:59:18.6517991Z     resource_global_cluster_config_test.go:53: Creating execution project (1): test-acc-tf-p-112550819248032221
2026-05-28T01:00:47.7199930Z     resource_global_cluster_config_test.go:53: 
2026-05-28T01:00:47.7201648Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:47.7204295Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:47.7206855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:00:47.7208574Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:78
2026-05-28T01:00:47.7211019Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/globalclusterconfig/resource_global_cluster_config_test.go:53
2026-05-28T01:00:47.7212349Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:00:47.7212895Z         	Error:      	Received unexpected error:
2026-05-28T01:00:47.7214828Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:47.7216092Z         	Test:       	TestAccGlobalClusterConfig_iss
2026-05-28T01:00:47.7217799Z         	Messages:   	Project creation failed: test-acc-tf-p-112550819248032221, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:47.7218925Z --- FAIL: TestAccGlobalClusterConfig_iss (89.07s)
```

- 2026-05-29 PASS 23 minutes
- 2026-05-30 PASS 17 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS 32 minutes
- 2026-06-02 PASS 17 minutes
- 2026-06-03 PASS 32 minutes
- 2026-06-04 PASS 31 minutes
- 2026-06-05 PASS 17 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 16 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 16 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 16 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 17 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
