# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_iss Test Details
# Found 33 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 31) FAIL TIMEOUT
Success rate: 96.88%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-20 10:26](#error-2025-10-20t1026100000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e41de46041f5668fc73/clusters | dev | out_of_capacity | 10.06s
[2025-10-30 00:28](#error-2025-10-30t0028020000) |  | dev |  | 6209.00s

## Timeline
- 2025-10-14: MISSING
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
- 2025-10-23 PASS 47 minutes
- 2025-10-24 PASS 44 minutes
- 2025-10-25 PASS 27 minutes
- 2025-10-26 PASS 13 minutes
- 2025-10-27 PASS 15 minutes
- 2025-10-28 PASS 14 minutes
- 2025-10-29 PASS 15 minutes
- 2025-10-30

### Error 2025-10-30T00:28:02+00:00
```
2025-10-30T00:28:02.7684329Z === RUN   TestAccGlobalClusterConfig_iss
2025-10-30T03:44:30.9833605Z === CONT  TestAccGlobalClusterConfig_iss
2025-10-30T03:44:35.9868155Z === NAME  TestAccGlobalClusterConfig_iss
2025-10-30T03:44:35.9869190Z     pre_check.go:46: Time before creating cluster: 2025-10-30T03:44:35.986594884Z, ProjectID: 6902b110abf4374f32988472, Cluster name: test-acc-tf-c-3220449141746037194
2025-10-30T05:28:00.0977036Z 	running tests:
2025-10-30T05:28:00.0978032Z 		TestAccGlobalClusterConfig_basic (1h43m29s)
2025-10-30T05:28:00.0978851Z 		TestAccGlobalClusterConfig_iss (1h43m29s)
```

- 2025-10-31 PASS 14 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 12 minutes
- 2025-11-03 PASS 17 minutes
- 2025-11-04 PASS 16 minutes
- 2025-11-05
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-11-06 PASS 38 minutes
- 2025-11-07 PASS 15 minutes
- 2025-11-08 PASS 15 minutes
- 2025-11-09 PASS 13 minutes
- 2025-11-10 PASS 14 minutes
- 2025-11-11 PASS 14 minutes
- 2025-11-12 PASS 14 minutes
- 2025-11-13
  - PASS 31 minutes
  - PASS 15 minutes