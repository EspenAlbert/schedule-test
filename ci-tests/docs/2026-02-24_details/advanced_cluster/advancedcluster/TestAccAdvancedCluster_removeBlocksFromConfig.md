# advanced_cluster/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 26) FAIL(x 7)
Success rate: 78.79%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035280000) |  | dev | timeout | 10808.05s
[2026-02-02 00:38](#error-2026-02-02t0038570000) |  | dev | timeout | 10808.08s
[2026-02-03 00:39](#error-2026-02-03t0039390000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143cbe3c7fce2317eb000/clusters | dev | out_of_capacity | 9.04s
[2026-02-06 00:36](#error-2026-02-06t0036390000) |  | dev | timeout | 10808.10s
[2026-02-11 00:43](#error-2026-02-11t0043530000) |  | dev | timeout | 10809.01s
[2026-02-12 00:38](#error-2026-02-12t0038320000) |  | dev | timeout | 10808.03s
[2026-02-13 00:41](#error-2026-02-13t0041290000) |  | dev | timeout | 10809.01s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 53 minutes
- 2026-01-27 PASS 56 minutes
- 2026-01-28 PASS 55 minutes
- 2026-01-29 PASS 59 minutes
- 2026-01-30 PASS an hour
- 2026-01-31

### Error 2026-01-31T00:35:28+00:00
```
2026-01-31T00:35:28.9408493Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-01-31T00:36:56.1552515Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2026-01-31T03:37:01.5310876Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2026-01-31T03:37:01.5311792Z     resource_test.go:1034: Step 1/4 error: Error running apply: exit status 1
2026-01-31T03:37:01.5312479Z         
2026-01-31T03:37:01.5313334Z         Error: Error in create
2026-01-31T03:37:01.5313925Z         
2026-01-31T03:37:01.5314505Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.5315739Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.5316912Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.5317505Z         
2026-01-31T03:37:01.5318334Z         cluster=test-acc-tf-c-5332212358942926112 didn't reach desired state: IDLE,
2026-01-31T03:37:01.5319204Z         error: context deadline exceeded
2026-01-31T03:37:01.7266466Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10808.53s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:57+00:00
```
2026-02-02T00:38:57.5306972Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-02T00:40:19.9288925Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-02T03:40:26.8345885Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-02T03:40:26.8346930Z     resource_test.go:1034: Step 1/4 error: Error running apply: exit status 1
2026-02-02T03:40:26.8347679Z         
2026-02-02T03:40:26.8348144Z         Error: Error in create
2026-02-02T03:40:26.8348612Z         
2026-02-02T03:40:26.8349255Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.8350599Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.8351807Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.8352570Z         
2026-02-02T03:40:26.8353434Z         cluster=test-acc-tf-c-8846589472433922863 didn't reach desired state: IDLE,
2026-02-02T03:40:26.8354314Z         error: context deadline exceeded
2026-02-02T03:40:27.0089958Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10808.83s)
```

- 2026-02-03

### Error 2026-02-03T00:39:39+00:00
```
2026-02-03T00:39:39.0475735Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-03T00:42:03.6657034Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-03T00:42:09.8407463Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-03T00:42:09.8408410Z     resource_test.go:1034: Step 1/4 error: Error running apply: exit status 1
2026-02-03T00:42:09.8409218Z         
2026-02-03T00:42:09.8409663Z         Error: Error in create
2026-02-03T00:42:09.8410082Z         
2026-02-03T00:42:09.8410688Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.8411838Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.8412942Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.8413504Z         
2026-02-03T00:42:09.8414252Z         cluster name: test-acc-tf-c-7783382837793818386, API error details:
2026-02-03T00:42:09.8415554Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143cbe3c7fce2317eb000/clusters
2026-02-03T00:42:09.8416812Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.8417950Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.8418770Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.8504691Z   
2026-02-03T00:42:10.1603433Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (9.45s)
```

- 2026-02-04 PASS an hour
- 2026-02-05 PASS an hour
- 2026-02-06

### Error 2026-02-06T00:36:39+00:00
```
2026-02-06T00:36:39.9735945Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-06T00:38:01.6236975Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-06T03:38:08.6931174Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-06T03:38:08.6931767Z     resource_test.go:1034: Step 1/4 error: Error running apply: exit status 1
2026-02-06T03:38:08.6932172Z         
2026-02-06T03:38:08.6932431Z         Error: Error in create
2026-02-06T03:38:08.6932690Z         
2026-02-06T03:38:08.6933017Z           with mongodbatlas_advanced_cluster.test,
2026-02-06T03:38:08.6933701Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-06T03:38:08.6934338Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-06T03:38:08.6934667Z         
2026-02-06T03:38:08.6935346Z         cluster=test-acc-tf-c-4649613281167304210 didn't reach desired state: IDLE,
2026-02-06T03:38:08.6935886Z         error: context deadline exceeded
2026-02-06T03:38:08.7402264Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10808.98s)
```

- 2026-02-07 PASS an hour
- 2026-02-08: MISSING
- 2026-02-09 PASS 2 hours
- 2026-02-10 PASS an hour
- 2026-02-11

### Error 2026-02-11T00:43:53+00:00
```
2026-02-11T00:43:53.9496608Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-11T00:45:12.1206882Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-11T03:45:18.8943921Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-11T03:45:18.8944678Z     resource_test.go:1034: Step 1/4 error: Error running apply: exit status 1
2026-02-11T03:45:18.8945173Z         
2026-02-11T03:45:18.8945436Z         Error: Error in create
2026-02-11T03:45:18.8945767Z         
2026-02-11T03:45:18.8946116Z           with mongodbatlas_advanced_cluster.test,
2026-02-11T03:45:18.8946911Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-11T03:45:18.8947814Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-11T03:45:18.8948256Z         
2026-02-11T03:45:18.8948726Z         cluster=test-acc-tf-c-4836703409719962656 didn't reach desired state: IDLE,
2026-02-11T03:45:18.8949449Z         error: context deadline exceeded
2026-02-11T03:45:18.9417704Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10809.15s)
```

- 2026-02-12

### Error 2026-02-12T00:38:32+00:00
```
2026-02-12T00:38:32.5982983Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-12T00:40:21.6619237Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-12T03:40:27.3487972Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-12T03:40:27.3488751Z     resource_test.go:1034: Step 1/4 error: Error running apply: exit status 1
2026-02-12T03:40:27.3489189Z         
2026-02-12T03:40:27.3489503Z         Error: Error in create
2026-02-12T03:40:27.3489824Z         
2026-02-12T03:40:27.3490155Z           with mongodbatlas_advanced_cluster.test,
2026-02-12T03:40:27.3491163Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-12T03:40:27.3491863Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-12T03:40:27.3492190Z         
2026-02-12T03:40:27.3492648Z         cluster=test-acc-tf-c-1775130593761667748 didn't reach desired state: IDLE,
2026-02-12T03:40:27.3493124Z         error: context deadline exceeded
2026-02-12T03:40:27.3960929Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10808.29s)
```

- 2026-02-13

### Error 2026-02-13T00:41:29+00:00
```
2026-02-13T00:41:29.7438237Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-13T00:42:51.2924028Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-13T03:42:58.6093455Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2026-02-13T03:42:58.6094442Z     resource_test.go:1034: Step 1/4 error: Error running apply: exit status 1
2026-02-13T03:42:58.6095319Z         
2026-02-13T03:42:58.6095958Z         Error: Error in create
2026-02-13T03:42:58.6096423Z         
2026-02-13T03:42:58.6096994Z           with mongodbatlas_advanced_cluster.test,
2026-02-13T03:42:58.6098336Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-13T03:42:58.6099455Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-13T03:42:58.6100009Z         
2026-02-13T03:42:58.6100830Z         cluster=test-acc-tf-c-2379748203272389292 didn't reach desired state: IDLE,
2026-02-13T03:42:58.6101679Z         error: context deadline exceeded
2026-02-13T03:42:58.6633091Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10809.12s)
```

- 2026-02-14 PASS an hour
- 2026-02-15: MISSING
- 2026-02-16 PASS an hour
- 2026-02-17 PASS an hour
- 2026-02-18 PASS an hour
- 2026-02-19 PASS 2 hours
- 2026-02-20 PASS 2 hours
- 2026-02-21 PASS an hour
- 2026-02-22: MISSING
- 2026-02-23 PASS an hour
- 2026-02-24 PASS an hour

## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 48 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 47 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 49 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 56 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 50 minutes
  - PASS 51 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 51 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
