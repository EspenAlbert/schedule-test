# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_advancedConfig Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035220000) |  | dev | timeout | 10810.07s
[2026-02-02 00:38](#error-2026-02-02t0038510000) |  | dev | timeout | 10830.06s
[2026-02-03 00:39](#error-2026-02-03t0039330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters | dev | out_of_capacity | 20.09s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 37 minutes
- 2026-01-09 PASS 42 minutes
- 2026-01-10 PASS 36 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 41 minutes
- 2026-01-13 PASS 47 minutes
- 2026-01-14 PASS 41 minutes
- 2026-01-15 PASS 48 minutes
- 2026-01-16 PASS 48 minutes
- 2026-01-17 PASS 45 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 37 minutes
- 2026-01-20 PASS 41 minutes
- 2026-01-21 PASS 44 minutes
- 2026-01-22 PASS 45 minutes
- 2026-01-23 PASS 48 minutes
- 2026-01-24 PASS 35 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 36 minutes
- 2026-01-27 PASS 43 minutes
- 2026-01-28 PASS 42 minutes
- 2026-01-29 PASS 49 minutes
- 2026-01-30 PASS 57 minutes
- 2026-01-31

### Error 2026-01-31T00:35:22+00:00
```
2026-01-31T00:35:22.4158698Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2026-01-31T00:36:56.1497259Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2026-01-31T00:37:06.1458900Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2026-01-31T00:37:06.1460820Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:37:06.145634548Z, ProjectID: 697d4e477d00588dcf9f3a06, Cluster name: test-acc-tf-c-2091015644933411766
2026-01-31T03:37:06.8275496Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2026-01-31T03:37:06.8276478Z     resource_test.go:323: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:37:06.8277230Z         
2026-01-31T03:37:06.8277618Z         Error: Error in create
2026-01-31T03:37:06.8277986Z         
2026-01-31T03:37:06.8278506Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:06.8279710Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:06.8280835Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:06.8281418Z         
2026-01-31T03:37:06.8282256Z         cluster=test-acc-tf-c-2091015644933411766 didn't reach desired state: IDLE,
2026-01-31T03:37:06.8283136Z         error: context deadline exceeded
2026-01-31T03:37:06.8911570Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (10810.74s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:51+00:00
```
2026-02-02T00:38:51.9712502Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2026-02-02T00:40:19.9754788Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2026-02-02T00:40:49.9160654Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2026-02-02T00:40:49.9163607Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:40:49.915718233Z, ProjectID: 697ff219197cc66080b0f49b, Cluster name: test-acc-tf-c-4660796030909311717
2026-02-02T03:40:50.5182845Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2026-02-02T03:40:50.5183678Z     resource_test.go:323: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:40:50.5184173Z         
2026-02-02T03:40:50.5184538Z         Error: Error in create
2026-02-02T03:40:50.5184836Z         
2026-02-02T03:40:50.5185322Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:50.5186256Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:50.5187189Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:50.5187667Z         
2026-02-02T03:40:50.5188240Z         cluster=test-acc-tf-c-4660796030909311717 didn't reach desired state: IDLE,
2026-02-02T03:40:50.5188841Z         error: context deadline exceeded
2026-02-02T03:40:50.5721796Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (10830.63s)
```

- 2026-02-03

### Error 2026-02-03T00:39:33+00:00
```
2026-02-03T00:39:33.6363053Z === RUN   TestAccClusterAdvancedCluster_advancedConfig
2026-02-03T00:42:03.6192976Z === CONT  TestAccClusterAdvancedCluster_advancedConfig
2026-02-03T00:42:23.6543031Z === NAME  TestAccClusterAdvancedCluster_advancedConfig
2026-02-03T00:42:23.6544482Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:42:23.654001725Z, ProjectID: 698143c2b2e54ee995909f8a, Cluster name: test-acc-tf-c-8212833999446656157
2026-02-03T00:42:24.4080659Z    test_terraform_path=/home/runner/work/_temp/1396652e-b654-4378-a4d9-60ca59d3b556/terraform test_working_directory=/tmp/plugintest2232414792 test_name=TestAccClusterAdvancedCluster_advancedConfig
2026-02-03T00:42:24.4081943Z     resource_test.go:323: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:42:24.4082920Z         
2026-02-03T00:42:24.4083318Z         Error: Error in create
2026-02-03T00:42:24.4083750Z         
2026-02-03T00:42:24.4084268Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:24.4085357Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:24.4086403Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:24.4086751Z         
2026-02-03T00:42:24.4087261Z         cluster name: test-acc-tf-c-8212833999446656157, API error details:
2026-02-03T00:42:24.4088194Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters
2026-02-03T00:42:24.4089395Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:24.4090428Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:24.4091324Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:24.4860182Z --- FAIL: TestAccClusterAdvancedCluster_advancedConfig (20.87s)
```

- 2026-02-04 PASS 54 minutes
- 2026-02-05 PASS 45 minutes
- 2026-02-06 PASS 46 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 32 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 41 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 33 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 36 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 39 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 40 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 34 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
