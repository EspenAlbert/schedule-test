# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_defaultWrite Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035220000) |  | dev | timeout | 10805.07s
[2026-02-02 00:38](#error-2026-02-02t0038510000) |  | dev | timeout | 10807.02s
[2026-02-03 00:39](#error-2026-02-03t0039330000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters | dev | out_of_capacity | 15.09s
[2026-02-24 00:37](#error-2026-02-24t0037080000) |  | dev | flaky_500 | 1026.06s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 31 minutes
- 2026-01-27 PASS 38 minutes
- 2026-01-28 PASS 36 minutes
- 2026-01-29 PASS 45 minutes
- 2026-01-30 PASS 54 minutes
- 2026-01-31

### Error 2026-01-31T00:35:22+00:00
```
2026-01-31T00:35:22.4160235Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-01-31T00:36:56.1447569Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2026-01-31T00:37:01.1461505Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-01-31T00:37:01.1465340Z     pre_check.go:46: Time before creating cluster: 2026-01-31T00:37:01.143633Z, ProjectID: 697d4e477d00588dcf9f3a06, Cluster name: test-acc-tf-c-7119320012649720928
2026-01-31T03:37:01.7742525Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-01-31T03:37:01.7745122Z     resource_test.go:370: Step 1/3 error: Error running apply: exit status 1
2026-01-31T03:37:01.7746172Z         
2026-01-31T03:37:01.7746706Z         Error: Error in create
2026-01-31T03:37:01.7747234Z         
2026-01-31T03:37:01.7747908Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.7749263Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.7750452Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.7751043Z         
2026-01-31T03:37:01.7751939Z         cluster=test-acc-tf-c-7119320012649720928 didn't reach desired state: IDLE,
2026-01-31T03:37:01.7752934Z         error: context deadline exceeded
2026-01-31T03:37:01.8311669Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10805.69s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:51+00:00
```
2026-02-02T00:38:51.9713906Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-02-02T00:40:19.8843472Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2026-02-02T00:40:24.9069624Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-02-02T00:40:24.9076647Z     pre_check.go:46: Time before creating cluster: 2026-02-02T00:40:24.902237362Z, ProjectID: 697ff219197cc66080b0f49b, Cluster name: test-acc-tf-c-8533212456935763312
2026-02-02T03:40:27.0203626Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-02-02T03:40:27.0204675Z     resource_test.go:370: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:40:27.0205426Z         
2026-02-02T03:40:27.0205897Z         Error: Error in create
2026-02-02T03:40:27.0206397Z         
2026-02-02T03:40:27.0207021Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:27.0208284Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:27.0209494Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:27.0210111Z         
2026-02-02T03:40:27.0211020Z         cluster=test-acc-tf-c-8533212456935763312 didn't reach desired state: IDLE,
2026-02-02T03:40:27.0211990Z         error: context deadline exceeded
2026-02-02T03:40:27.0795536Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10807.20s)
```

- 2026-02-03

### Error 2026-02-03T00:39:33+00:00
```
2026-02-03T00:39:33.6363865Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-02-03T00:42:03.6191687Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2026-02-03T00:42:18.6530665Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-02-03T00:42:18.6532891Z     pre_check.go:46: Time before creating cluster: 2026-02-03T00:42:18.652788485Z, ProjectID: 698143c2b2e54ee995909f8a, Cluster name: test-acc-tf-c-2129807922008296732
2026-02-03T00:42:19.4658081Z    test_name=TestAccClusterAdvancedCluster_defaultWrite test_terraform_path=/home/runner/work/_temp/1396652e-b654-4378-a4d9-60ca59d3b556/terraform test_working_directory=/tmp/plugintest3670495303 test_step_number=1
2026-02-03T00:42:19.4659513Z     resource_test.go:370: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:42:19.4659975Z         
2026-02-03T00:42:19.4660236Z         Error: Error in create
2026-02-03T00:42:19.4660869Z         
2026-02-03T00:42:19.4661264Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:19.4661991Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:19.4662702Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:19.4663037Z         
2026-02-03T00:42:19.4663499Z         cluster name: test-acc-tf-c-2129807922008296732, API error details:
2026-02-03T00:42:19.4664305Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters
2026-02-03T00:42:19.4664974Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:19.4665606Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:19.4666102Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:19.5210516Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (15.91s)
```

- 2026-02-04 PASS 50 minutes
- 2026-02-05 PASS 39 minutes
- 2026-02-06 PASS 43 minutes
- 2026-02-07 PASS 38 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 40 minutes
- 2026-02-10 PASS 39 minutes
- 2026-02-11 PASS 38 minutes
- 2026-02-12 PASS 39 minutes
- 2026-02-13 PASS 40 minutes
- 2026-02-14 PASS 42 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 41 minutes
- 2026-02-17 PASS 41 minutes
- 2026-02-18 PASS 42 minutes
- 2026-02-19 PASS 52 minutes
- 2026-02-20 PASS 42 minutes
- 2026-02-21 PASS 39 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 41 minutes
- 2026-02-24

### Error 2026-02-24T00:37:08+00:00
```
2026-02-24T00:37:08.6994784Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2026-02-24T00:40:00.5495705Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2026-02-24T00:40:10.5521419Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-02-24T00:40:10.5525470Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:40:10.551913393Z, ProjectID: 699cf2b18dfec41eaa8533ad, Cluster name: test-acc-tf-c-9160167003111444034
2026-02-24T00:57:07.1036156Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2026-02-24T00:57:07.1036929Z     resource_test.go:369: Step 1/3 error: Error running apply: exit status 1
2026-02-24T00:57:07.1037399Z         
2026-02-24T00:57:07.1037840Z         Error: Error in update advanced configuration
2026-02-24T00:57:07.1038143Z         
2026-02-24T00:57:07.1038632Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T00:57:07.1039427Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:57:07.1040216Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:57:07.1040541Z         
2026-02-24T00:57:07.1041121Z         cluster name: test-acc-tf-c-9160167003111444034, API error details: (503
2026-02-24T00:57:07.1041916Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:07.1489476Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (1026.60s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 36 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 30 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 34 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 39 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 33 minutes
  - PASS 30 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 36 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
