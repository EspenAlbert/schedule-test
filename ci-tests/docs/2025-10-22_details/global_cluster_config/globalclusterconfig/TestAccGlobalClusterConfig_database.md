# global_cluster_config/globalclusterconfig/TestAccGlobalClusterConfig_database Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 00:27](#error-2025-10-07t0027230000) |  | dev |  | 10805.08s
[2025-10-20 10:26](#error-2025-10-20t1026100000) | OUT_OF_CAPACITY /api/atlas/v2/groups/68f60e41de46041f5668fc73/clusters | dev | out_of_capacity | 5.08s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS 38 minutes
- 2025-09-24 PASS 40 minutes
- 2025-09-25 PASS 40 minutes
- 2025-09-26 PASS 40 minutes
- 2025-09-27 PASS 24 minutes
- 2025-09-28 PASS 25 minutes
- 2025-09-29 PASS 26 minutes
- 2025-09-30
  - PASS 25 minutes
  - PASS 23 minutes
  - PASS 20 minutes
- 2025-10-01
  - PASS 22 minutes
  - PASS 19 minutes
  - PASS 17 minutes
  - PASS 35 minutes
  - PASS 18 minutes
  - PASS 19 minutes
  - PASS 41 minutes
  - PASS 18 minutes
- 2025-10-02 PASS 2 hours
- 2025-10-03 PASS 25 minutes
- 2025-10-04 PASS 32 minutes
- 2025-10-05 PASS 18 minutes
- 2025-10-06 PASS 19 minutes
- 2025-10-07

### Error 2025-10-07T00:27:23+00:00
```
2025-10-07T00:27:23.6395879Z === RUN   TestAccGlobalClusterConfig_database
2025-10-07T00:27:28.6445888Z     pre_check.go:36: Time before creating cluster: 2025-10-07T00:27:28.644060277Z, ProjectID: 68e45e69507f48738a07ba45, Cluster name: test-acc-tf-c-1100150407761791679
2025-10-07T03:27:29.4465549Z    test_name=TestAccGlobalClusterConfig_database
2025-10-07T03:27:29.4466646Z     resource_global_cluster_config_test.go:161: Step 1/5 error: Error running apply: exit status 1
2025-10-07T03:27:29.4467390Z         
2025-10-07T03:27:29.4468165Z         Error: Error in create
2025-10-07T03:27:29.4468587Z         
2025-10-07T03:27:29.4469228Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-07T03:27:29.4470444Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-07T03:27:29.4471676Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-07T03:27:29.4472312Z         
2025-10-07T03:27:29.4473201Z         cluster=test-acc-tf-c-1100150407761791679 didn't reach desired state: IDLE,
2025-10-07T03:27:29.4474133Z         error: context deadline exceeded
2025-10-07T03:27:29.4935751Z --- FAIL: TestAccGlobalClusterConfig_database (10805.85s)
```

- 2025-10-08 PASS 25 minutes
- 2025-10-09 PASS 2 hours
- 2025-10-10 PASS 23 minutes
- 2025-10-11 PASS 25 minutes
- 2025-10-12 PASS 2 hours
- 2025-10-13 PASS 40 minutes
- 2025-10-14 PASS 22 minutes
- 2025-10-15 PASS 23 minutes
- 2025-10-16 PASS 28 minutes
- 2025-10-17 PASS 23 minutes
- 2025-10-18 PASS 21 minutes
- 2025-10-19 PASS 20 minutes
- 2025-10-20
  - PASS an hour
  - FAIL 5 seconds

### Error 2025-10-20T10:26:10+00:00
```
2025-10-20T10:26:10.9504427Z === RUN   TestAccGlobalClusterConfig_database
2025-10-20T10:26:15.9553334Z     pre_check.go:36: Time before creating cluster: 2025-10-20T10:26:15.955026489Z, ProjectID: 68f60e41de46041f5668fc73, Cluster name: test-acc-tf-c-8213628140060477104
2025-10-20T10:26:16.7546810Z   
2025-10-20T10:26:16.7547841Z     resource_global_cluster_config_test.go:161: Step 1/5 error: Error running apply: exit status 1
2025-10-20T10:26:16.7548570Z         
2025-10-20T10:26:16.7548980Z         Error: Error in create
2025-10-20T10:26:16.7549397Z         
2025-10-20T10:26:16.7550013Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-10-20T10:26:16.7551236Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-10-20T10:26:16.7552394Z           12: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-10-20T10:26:16.7552952Z         
2025-10-20T10:26:16.7553668Z         cluster name: test-acc-tf-c-8213628140060477104, API error details:
2025-10-20T10:26:16.7554781Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68f60e41de46041f5668fc73/clusters
2025-10-20T10:26:16.7556168Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2025-10-20T10:26:16.7558021Z         region is currently out of capacity for the requested instance size. Reason:
2025-10-20T10:26:16.7558848Z         Conflict. Params: [], BadRequestDetail: 
2025-10-20T10:26:16.8018997Z --- FAIL: TestAccGlobalClusterConfig_database (5.85s)
```

- 2025-10-21 PASS 20 minutes
- 2025-10-22
  - PASS 26 minutes
  - PASS 21 minutes