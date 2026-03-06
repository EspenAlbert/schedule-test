# advanced_cluster/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 4)
Success rate: 88.89%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-06 00:36](#error-2026-02-06t0036390000) |  | dev | timeout | 10808.10s
[2026-02-11 00:43](#error-2026-02-11t0043530000) |  | dev | timeout | 10809.01s
[2026-02-12 00:38](#error-2026-02-12t0038320000) |  | dev | timeout | 10808.03s
[2026-02-13 00:41](#error-2026-02-13t0041290000) |  | dev | timeout | 10809.01s

### Timeline
- 2026-02-04: MISSING
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
- 2026-02-25 PASS an hour
- 2026-02-26 PASS an hour
- 2026-02-27 PASS an hour
- 2026-02-28 PASS 2 hours
- 2026-03-01: MISSING
- 2026-03-02
  - PASS an hour
  - PASS 2 hours
- 2026-03-03 PASS an hour
- 2026-03-04 PASS 2 hours
- 2026-03-05 PASS 2 hours
- 2026-03-06 PASS 3 hours

## QA Environment
### Timeline
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
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 54 minutes
- 2026-03-02 PASS 48 minutes
- 2026-03-03 PASS 51 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
