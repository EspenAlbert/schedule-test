# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_iss Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 2) TIMEOUT
Success rate: 91.18%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:44](#error-2026-04-07t0044410000) |  | dev |  | 6201.00s
[2026-04-16 00:50](#error-2026-04-16t0050320000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032551ec945fedc7175a5/clusters | dev | out_of_capacity | 10.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:44:41+00:00
```
2026-04-07T00:44:41.6526574Z === RUN   TestAccGlobalClusterConfig_iss
2026-04-07T04:01:19.1020967Z === CONT  TestAccGlobalClusterConfig_iss
2026-04-07T04:01:34.1102361Z === NAME  TestAccGlobalClusterConfig_iss
2026-04-07T04:01:34.1105699Z     pre_check.go:46: Time before creating cluster: 2026-04-07T04:01:34.109913064Z, ProjectID: 69d45377c0b364eb740db947, Cluster name: test-acc-tf-c-5176424235956123462
2026-04-07T05:44:39.6825352Z panic: test timed out after 5h0m0s
2026-04-07T05:44:39.6825892Z 	running tests:
2026-04-07T05:44:39.6826330Z 		TestAccGlobalClusterConfig_iss (1h43m21s)
```

- 2026-04-08 PASS 17 minutes
- 2026-04-09 PASS 23 minutes
- 2026-04-10 PASS 31 minutes
- 2026-04-11 PASS 14 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 15 minutes
- 2026-04-14 PASS 17 minutes
- 2026-04-15 PASS 21 minutes
- 2026-04-16

### Error 2026-04-16T00:50:32+00:00
```
2026-04-16T00:50:32.5448205Z === RUN   TestAccGlobalClusterConfig_iss
2026-04-16T00:50:38.6506102Z === CONT  TestAccGlobalClusterConfig_iss
2026-04-16T00:50:48.6524320Z === NAME  TestAccGlobalClusterConfig_iss
2026-04-16T00:50:48.6525881Z     pre_check.go:46: Time before creating cluster: 2026-04-16T00:50:48.652152407Z, ProjectID: 69e032551ec945fedc7175a5, Cluster name: test-acc-tf-c-1048512110488238931
2026-04-16T00:50:49.4877007Z   
2026-04-16T00:50:49.4878064Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-04-16T00:50:49.4878810Z         
2026-04-16T00:50:49.4879168Z         Error: Error in create
2026-04-16T00:50:49.4879489Z         
2026-04-16T00:50:49.4880021Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-16T00:50:49.4881222Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-16T00:50:49.4882378Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-16T00:50:49.4882974Z         
2026-04-16T00:50:49.4883683Z         cluster name: test-acc-tf-c-1048512110488238931, API error details:
2026-04-16T00:50:49.4885134Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032551ec945fedc7175a5/clusters
2026-04-16T00:50:49.4886299Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-04-16T00:50:49.4887611Z         region is currently out of capacity for the requested instance size. Reason:
2026-04-16T00:50:49.4888484Z         Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:50:49.5330271Z --- FAIL: TestAccGlobalClusterConfig_iss (10.88s)
```

- 2026-04-17 PASS 16 minutes
- 2026-04-18 PASS 15 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 16 minutes
- 2026-04-21 PASS 20 minutes
- 2026-04-22 PASS 17 minutes
- 2026-04-23 PASS 22 minutes
- 2026-04-24 PASS 19 minutes
- 2026-04-25 PASS 15 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 19 minutes
- 2026-04-28 PASS 25 minutes
- 2026-04-29 PASS 21 minutes
- 2026-04-30 PASS 32 minutes
- 2026-05-01 PASS 29 minutes
- 2026-05-02 PASS 15 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 20 minutes
- 2026-05-05 PASS 33 minutes
- 2026-05-06 PASS 58 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-04-12 00:47](#error-2026-04-12t0047590000) |  | qa | 334.02s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 15 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12

### Error 2026-04-12T00:47:59+00:00
```
2026-04-12T00:47:59.6626424Z === RUN   TestAccGlobalClusterConfig_iss
2026-04-12T01:13:33.7861082Z === CONT  TestAccGlobalClusterConfig_iss
2026-04-12T01:13:53.7957668Z === NAME  TestAccGlobalClusterConfig_iss
2026-04-12T01:13:53.7965156Z     pre_check.go:46: Time before creating cluster: 2026-04-12T01:13:53.795486648Z, ProjectID: 69daebbcabb831662d29d584, Cluster name: test-acc-tf-c-5956142563917407098
2026-04-12T01:19:07.9109926Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/2da04f9a-a616-4096-b3a9-5a636fd1f763/terraform test_working_directory=/tmp/plugintest3349212122
2026-04-12T01:19:07.9116785Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2026-04-12T01:19:07.9117311Z         
2026-04-12T01:19:07.9117552Z         Error: Error in create
2026-04-12T01:19:07.9117787Z         
2026-04-12T01:19:07.9118210Z           with mongodbatlas_advanced_cluster.cluster_info,
2026-04-12T01:19:07.9119120Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2026-04-12T01:19:07.9119985Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2026-04-12T01:19:07.9120432Z         
2026-04-12T01:19:07.9121051Z         cluster=test-acc-tf-c-5956142563917407098 didn't reach desired state: IDLE,
2026-04-12T01:19:07.9121558Z         error:
2026-04-12T01:19:07.9122455Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/69daebbcabb831662d29d584/clusters/test-acc-tf-c-5956142563917407098
2026-04-12T01:19:07.9123641Z         GET: HTTP 401 Unauthorized (Error code: "") Detail: You are not authorized
2026-04-12T01:19:07.9124493Z         for this resource. Reason: Unauthorized. Params: [], BadRequestDetail: 
2026-04-12T01:19:07.9478868Z --- FAIL: TestAccGlobalClusterConfig_iss (334.16s)
```

- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 16 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 15 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 17 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 17 minutes
- 2026-05-04 PASS 17 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 15 minutes
