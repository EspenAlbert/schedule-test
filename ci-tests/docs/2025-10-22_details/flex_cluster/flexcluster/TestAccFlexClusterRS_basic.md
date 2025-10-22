# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 41 TestRuns in dev, qa from 2025-09-23 to 2025-10-22 from master branch: 1 unique tests, PASS(x 37) FAIL(x 4)
Success rate: 90.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 00:28](#error-2025-10-01t0028180000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68dc75a20c72c45ec9a85dd2/flexClusters/test-acc-tf-7968022917237464223 | dev |  | 14.02s
[2025-10-01 04:54](#error-2025-10-01t0454580000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68dcb4235a2f964500206263/flexClusters/test-acc-tf-4910701523154029188 | dev | flaky_500 | 13.07s
[2025-10-03 00:25](#error-2025-10-03t0025570000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68df1815d30b87489c554f95/flexClusters/test-acc-tf-5980129244180254861 | dev |  | 13.07s
[2025-10-04 00:25](#error-2025-10-04t0025530000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68e06991065c07374c392a3f/flexClusters/test-acc-tf-2360067833932784860 | dev |  | 12.09s

## Timeline
- 2025-09-22: MISSING
- 2025-09-23 PASS a minute
- 2025-09-24 PASS a minute
- 2025-09-25 PASS a minute
- 2025-09-26 PASS a minute
- 2025-09-27 PASS 51 seconds
- 2025-09-28 PASS 50 seconds
- 2025-09-29 PASS a minute
- 2025-09-30
  - PASS 52 seconds
  - PASS 53 seconds
  - PASS 53 seconds
- 2025-10-01
  - FAIL 14 seconds

### Error 2025-10-01T00:28:18+00:00
```
2025-10-01T00:28:18.1828810Z === RUN   TestAccFlexClusterRS_basic
2025-10-01T00:28:18.1832187Z     resource_test.go:20: Creating execution project: test-acc-tf-p-3225435735270613564
2025-10-01T00:28:32.1062816Z    test_working_directory=/tmp/plugintest3882349095 test_step_number=1 test_name=TestAccFlexClusterRS_basic
2025-10-01T00:28:32.1066013Z     resource_test.go:22: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T00:28:32.1068310Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T00:28:32.1070134Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-01T00:28:32.3361756Z    test_step_number=1 test_name=TestAccFlexClusterRS_basic
2025-10-01T00:28:32.3362808Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T00:28:32.3363511Z         
2025-10-01T00:28:32.3364468Z         Error: error deleting a flex cluster (68dc75a20c72c45ec9a85dd2): test-acc-tf-7968022917237464223
2025-10-01T00:28:32.3365198Z         
2025-10-01T00:28:32.3366626Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dc75a20c72c45ec9a85dd2/flexClusters/test-acc-tf-7968022917237464223
2025-10-01T00:28:32.3368009Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-10-01T00:28:32.3369025Z         Reason: Cannot terminate cluster test-acc-tf-7968022917237464223 in group
2025-10-01T00:28:32.3370173Z         68dc75a20c72c45ec9a85dd2 because termination protection is enabled. Disable
2025-10-01T00:28:32.3371298Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-10-01T00:28:32.3372273Z         terminate cluster test-acc-tf-7968022917237464223 in group
2025-10-01T00:28:32.3373569Z         68dc75a20c72c45ec9a85dd2 because termination protection is enabled. Disable
2025-10-01T00:28:32.3374646Z         termination protection and try again.], BadRequestDetail: 
2025-10-01T00:28:32.3375259Z --- FAIL: TestAccFlexClusterRS_basic (14.15s)
```

  - PASS 52 seconds
  - FAIL 13 seconds

### Error 2025-10-01T04:54:58+00:00
```
2025-10-01T04:54:58.8981527Z === RUN   TestAccFlexClusterRS_basic
2025-10-01T04:54:58.8982368Z     resource_test.go:20: Creating execution project: test-acc-tf-p-5884105675256181997
2025-10-01T04:55:12.3389235Z    test_name=TestAccFlexClusterRS_basic
2025-10-01T04:55:12.3391324Z     resource_test.go:22: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T04:55:12.3393139Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-01T04:55:12.3394750Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-01T04:55:12.6180802Z   
2025-10-01T04:55:12.6181815Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T04:55:12.6182603Z         
2025-10-01T04:55:12.6183592Z         Error: error deleting a flex cluster (68dcb4235a2f964500206263): test-acc-tf-4910701523154029188
2025-10-01T04:55:12.6184573Z         
2025-10-01T04:55:12.6185905Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dcb4235a2f964500206263/flexClusters/test-acc-tf-4910701523154029188
2025-10-01T04:55:12.6187365Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-10-01T04:55:12.6188435Z         Reason: Cannot terminate cluster test-acc-tf-4910701523154029188 in group
2025-10-01T04:55:12.6189581Z         68dcb4235a2f964500206263 because termination protection is enabled. Disable
2025-10-01T04:55:12.6190760Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-10-01T04:55:12.6191776Z         terminate cluster test-acc-tf-4910701523154029188 in group
2025-10-01T04:55:12.6193096Z         68dcb4235a2f964500206263 because termination protection is enabled. Disable
2025-10-01T04:55:12.6194530Z         termination protection and try again.], BadRequestDetail: 
2025-10-01T04:55:12.6195214Z --- FAIL: TestAccFlexClusterRS_basic (13.72s)
```

  - PASS 52 seconds
  - PASS 54 seconds
  - PASS a minute
  - PASS 59 seconds
  - PASS 6 minutes
- 2025-10-02 PASS a minute
- 2025-10-03

### Error 2025-10-03T00:25:57+00:00
```
2025-10-03T00:25:57.5866411Z === RUN   TestAccFlexClusterRS_basic
2025-10-03T00:25:57.5867477Z     resource_test.go:20: Creating execution project: test-acc-tf-p-6634955015127024952
2025-10-03T00:26:11.0644442Z     resource_test.go:22: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-03T00:26:11.3078828Z   
2025-10-03T00:26:11.3079734Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-03T00:26:11.3080539Z         
2025-10-03T00:26:11.3081544Z         Error: error deleting a flex cluster (68df1815d30b87489c554f95): test-acc-tf-5980129244180254861
2025-10-03T00:26:11.3082297Z         
2025-10-03T00:26:11.3083601Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68df1815d30b87489c554f95/flexClusters/test-acc-tf-5980129244180254861
2025-10-03T00:26:11.3085094Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-10-03T00:26:11.3086424Z         Reason: Cannot terminate cluster test-acc-tf-5980129244180254861 in group
2025-10-03T00:26:11.3087578Z         68df1815d30b87489c554f95 because termination protection is enabled. Disable
2025-10-03T00:26:11.3088743Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-10-03T00:26:11.3089726Z         terminate cluster test-acc-tf-5980129244180254861 in group
2025-10-03T00:26:11.3090758Z         68df1815d30b87489c554f95 because termination protection is enabled. Disable
2025-10-03T00:26:11.3091805Z         termination protection and try again.], BadRequestDetail: 
2025-10-03T00:26:11.3092438Z --- FAIL: TestAccFlexClusterRS_basic (13.72s)
```

- 2025-10-04

### Error 2025-10-04T00:25:53+00:00
```
2025-10-04T00:25:53.2119264Z === RUN   TestAccFlexClusterRS_basic
2025-10-04T00:25:53.2121844Z     resource_test.go:20: Creating execution project: test-acc-tf-p-6577462820319376906
2025-10-04T00:26:05.9005564Z   
2025-10-04T00:26:05.9006930Z     resource_test.go:22: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-04T00:26:05.9008537Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-10-04T00:26:05.9009622Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-10-04T00:26:06.1115535Z    test_working_directory=/tmp/plugintest815938718 test_name=TestAccFlexClusterRS_basic test_terraform_path=/home/runner/work/_temp/16e06637-a467-4b7b-8c19-cfed1eec88de/terraform
2025-10-04T00:26:06.1116802Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-04T00:26:06.1117247Z         
2025-10-04T00:26:06.1117799Z         Error: error deleting a flex cluster (68e06991065c07374c392a3f): test-acc-tf-2360067833932784860
2025-10-04T00:26:06.1118229Z         
2025-10-04T00:26:06.1118929Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e06991065c07374c392a3f/flexClusters/test-acc-tf-2360067833932784860
2025-10-04T00:26:06.1119726Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-10-04T00:26:06.1120332Z         Reason: Cannot terminate cluster test-acc-tf-2360067833932784860 in group
2025-10-04T00:26:06.1120958Z         68e06991065c07374c392a3f because termination protection is enabled. Disable
2025-10-04T00:26:06.1121894Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-10-04T00:26:06.1122471Z         terminate cluster test-acc-tf-2360067833932784860 in group
2025-10-04T00:26:06.1123060Z         68e06991065c07374c392a3f because termination protection is enabled. Disable
2025-10-04T00:26:06.1123619Z         termination protection and try again.], BadRequestDetail: 
2025-10-04T00:26:06.1123988Z --- FAIL: TestAccFlexClusterRS_basic (12.90s)
```

- 2025-10-05 PASS 49 seconds
- 2025-10-06 PASS 52 seconds
- 2025-10-07 PASS a minute
- 2025-10-08 PASS 2 minutes
- 2025-10-09 PASS 6 minutes
- 2025-10-10 PASS 3 minutes
- 2025-10-11 PASS a minute
- 2025-10-12 PASS 49 seconds
- 2025-10-13 PASS 54 seconds
- 2025-10-14 PASS 52 seconds
- 2025-10-15 PASS a minute
- 2025-10-16 PASS a minute
- 2025-10-17 PASS a minute
- 2025-10-18 PASS a minute
- 2025-10-19 PASS a minute
- 2025-10-20
  - PASS a minute
  - PASS a minute
- 2025-10-21 PASS a minute
- 2025-10-22
  - PASS a minute
  - PASS 49 seconds