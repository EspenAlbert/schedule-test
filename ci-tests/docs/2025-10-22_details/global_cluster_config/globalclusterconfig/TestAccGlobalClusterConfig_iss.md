# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_iss Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) TIMEOUT FAIL
Success rate: 97.50%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027230000) |  | dev |  | 7191.00s
[2025-10-20 10:26](#error-2025-10-20t1026100000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e41de46041f5668fc73/clusters | dev | out_of_capacity | 10.06s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 21 minutes
- 2025-09-24 PASS 29 minutes
- 2025-09-25 PASS 22 minutes
- 2025-09-26 PASS 22 minutes
- 2025-09-27 PASS 13 minutes
- 2025-09-28 PASS 15 minutes
- 2025-09-29 PASS 33 minutes
- 2025-09-30
  - PASS 14 minutes
  - PASS 14 minutes
  - PASS 13 minutes
- 2025-10-01
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS an hour
  - PASS 12 minutes
  - PASS 28 minutes
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-10-02 PASS 15 minutes
- 2025-10-03 PASS 13 minutes
- 2025-10-04 PASS 14 minutes
- 2025-10-05 PASS 13 minutes
- 2025-10-06 PASS 42 minutes
- 2025-10-07

### Error 2025-10-07T00:27:23+00:00
```
2025-10-07T00:27:23.6392459Z === RUN   TestAccGlobalClusterConfig_iss
2025-10-07T03:27:29.4937246Z === CONT  TestAccGlobalClusterConfig_iss
2025-10-07T03:27:49.5064295Z === NAME  TestAccGlobalClusterConfig_iss
2025-10-07T03:27:49.5067355Z     pre_check.go:36: Time before creating cluster: 2025-10-07T03:27:49.506157342Z, ProjectID: 68e45e69507f48738a07ba45, Cluster name: test-acc-tf-c-5483692996487408498
2025-10-07T05:27:20.9535754Z panic: test timed out after 5h0m0s
2025-10-07T05:27:20.9536372Z 	running tests:
2025-10-07T05:27:20.9536924Z 		TestAccGlobalClusterConfig_iss (1h59m51s)
```

- 2025-10-08 PASS 14 minutes
- 2025-10-09 PASS 35 minutes
- 2025-10-10 PASS 15 minutes
- 2025-10-11 PASS 41 minutes
- 2025-10-12 PASS 13 minutes
- 2025-10-13 PASS 25 minutes
- 2025-10-14 PASS 14 minutes
- 2025-10-15 PASS 14 minutes
- 2025-10-16 PASS 29 minutes
- 2025-10-17 PASS 13 minutes
- 2025-10-18 PASS 13 minutes
- 2025-10-19 PASS 15 minutes
- 2025-10-20
  - PASS 14 minutes
  - FAIL 10 seconds

### Error 2025-10-20T10:26:10+00:00
```
2025-10-20T10:26:10.9501387Z === RUN   TestAccGlobalClusterConfig_iss
2025-10-20T10:26:16.8019853Z === CONT  TestAccGlobalClusterConfig_iss
2025-10-20T10:26:26.8059201Z === NAME  TestAccGlobalClusterConfig_iss
2025-10-20T10:26:26.8060187Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:26:26.805638105Z, ProjectID: 68f60e41de46041f5668fc73, Cluster name: test-acc-tf-c-9045790039109643400
2025-10-20T10:26:27.3600027Z    test_working_directory=/tmp/plugintest798189374 test_name=TestAccGlobalClusterConfig_iss
2025-10-20T10:26:27.3601135Z     resource_global_cluster_config_test.go:62: Step 1/1 error: Error running apply: exit status 1
2025-10-20T10:26:27.3601732Z         
2025-10-20T10:26:27.3602098Z         Error: Error in create
2025-10-20T10:26:27.3602449Z         
2025-10-20T10:26:27.3602930Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-20T10:26:27.3604031Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-20T10:26:27.3605033Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-20T10:26:27.3605365Z         
2025-10-20T10:26:27.3605869Z         cluster name: test-acc-tf-c-9045790039109643400, API error details:
2025-10-20T10:26:27.3606610Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e41de46041f5668fc73/clusters
2025-10-20T10:26:27.3607496Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:26:27.3608334Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:26:27.3608958Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:26:27.4007751Z --- FAIL: TestAccGlobalClusterConfig_iss (10.60s)
```

- 2025-10-21 PASS 13 minutes
- 2025-10-22
  - PASS 16 minutes
  - PASS 13 minutes