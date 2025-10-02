# flex_cluster/flexcluster/TestAccFlexClusterRS_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 4)
Success rate: 90.48%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-03 00:25](#error-2025-09-03t0025570000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68b78b1573bec4026cf73936/flexClusters/test-acc-tf-5056861727582132851 | dev | flaky_500 | 13.05s
[2025-09-10 00:27](#error-2025-09-10t0027090000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68c0c5dd3fcb0812ccf2d4c5/flexClusters/test-acc-tf-5903038771984099073 | dev |  | 12.05s
[2025-10-01 00:28](#error-2025-10-01t0028180000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68dc75a20c72c45ec9a85dd2/flexClusters/test-acc-tf-7968022917237464223 | dev |  | 14.02s
[2025-10-01 04:54](#error-2025-10-01t0454580000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/68dcb4235a2f964500206263/flexClusters/test-acc-tf-4910701523154029188 | dev | flaky_500 | 13.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03

### Error 2025-09-03T00:25:57+00:00
```
2025-09-03T00:25:57.6500340Z === RUN   TestAccFlexClusterRS_basic
2025-09-03T00:25:57.6503379Z     resource_test.go:19: Creating execution project: test-acc-tf-p-3233655268662420427
2025-09-03T00:26:10.8618171Z    test_working_directory=/tmp/plugintest3617820298 test_step_number=1
2025-09-03T00:26:10.8622249Z     resource_test.go:21: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-03T00:26:10.8624077Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-03T00:26:10.8625765Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-03T00:26:11.1644710Z   
2025-09-03T00:26:11.1645262Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-03T00:26:11.1645684Z         
2025-09-03T00:26:11.1646235Z         Error: error deleting a flex cluster (68b78b1573bec4026cf73936): test-acc-tf-5056861727582132851
2025-09-03T00:26:11.1646678Z         
2025-09-03T00:26:11.1647379Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b78b1573bec4026cf73936/flexClusters/test-acc-tf-5056861727582132851
2025-09-03T00:26:11.1648149Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-03T00:26:11.1648737Z         Reason: Cannot terminate cluster test-acc-tf-5056861727582132851 in group
2025-09-03T00:26:11.1649355Z         68b78b1573bec4026cf73936 because termination protection is enabled. Disable
2025-09-03T00:26:11.1649992Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-09-03T00:26:11.1650738Z         terminate cluster test-acc-tf-5056861727582132851 in group
2025-09-03T00:26:11.1651741Z         68b78b1573bec4026cf73936 because termination protection is enabled. Disable
2025-09-03T00:26:11.1652309Z         termination protection and try again.], BadRequestDetail: 
2025-09-03T00:26:11.1652677Z --- FAIL: TestAccFlexClusterRS_basic (13.51s)
```

- 2025-09-04 PASS 51 seconds
- 2025-09-05 PASS a minute
- 2025-09-06 PASS a minute
- 2025-09-07 PASS 48 seconds
- 2025-09-08
  - PASS 52 seconds
  - PASS 49 seconds
  - PASS a minute
- 2025-09-09 PASS 50 seconds
- 2025-09-10

### Error 2025-09-10T00:27:09+00:00
```
2025-09-10T00:27:09.2391392Z === RUN   TestAccFlexClusterRS_basic
2025-09-10T00:27:09.2392533Z     resource_test.go:20: Creating execution project: test-acc-tf-p-5211712725810966572
2025-09-10T00:27:21.5594000Z    test_terraform_path=/home/runner/work/_temp/14b48e63-f07e-43fe-a530-4f498caf02ca/terraform
2025-09-10T00:27:21.5598399Z     resource_test.go:22: Step 1/3 error: Check failed: Check 6/39 error: mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-10T00:27:21.5600405Z         Check 18/39 error: data.mongodbatlas_flex_cluster.test: Attribute 'connection_strings.standard' expected to be set
2025-09-10T00:27:21.5602093Z         Check 30/39 error: data.mongodbatlas_flex_clusters.test: Attribute 'results.0.connection_strings.standard' expected to be set
2025-09-10T00:27:21.7916664Z    test_terraform_path=/home/runner/work/_temp/14b48e63-f07e-43fe-a530-4f498caf02ca/terraform test_working_directory=/tmp/plugintest855491415 test_step_number=1 test_name=TestAccFlexClusterRS_basic
2025-09-10T00:27:21.7918632Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-10T00:27:21.7919844Z         
2025-09-10T00:27:21.7920919Z         Error: error deleting a flex cluster (68c0c5dd3fcb0812ccf2d4c5): test-acc-tf-5903038771984099073
2025-09-10T00:27:21.7921720Z         
2025-09-10T00:27:21.7923107Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68c0c5dd3fcb0812ccf2d4c5/flexClusters/test-acc-tf-5903038771984099073
2025-09-10T00:27:21.7924586Z         DELETE: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail:
2025-09-10T00:27:21.7925737Z         Reason: Cannot terminate cluster test-acc-tf-5903038771984099073 in group
2025-09-10T00:27:21.7926873Z         68c0c5dd3fcb0812ccf2d4c5 because termination protection is enabled. Disable
2025-09-10T00:27:21.7928037Z         termination protection and try again.. Reason: Bad Request. Params: [Cannot
2025-09-10T00:27:21.7929043Z         terminate cluster test-acc-tf-5903038771984099073 in group
2025-09-10T00:27:21.7930816Z         68c0c5dd3fcb0812ccf2d4c5 because termination protection is enabled. Disable
2025-09-10T00:27:21.7931834Z         termination protection and try again.], BadRequestDetail: 
2025-09-10T00:27:21.7932492Z --- FAIL: TestAccFlexClusterRS_basic (12.55s)
```

- 2025-09-11 PASS a minute
- 2025-09-12 PASS a minute
- 2025-09-13 PASS a minute
- 2025-09-14 PASS 49 seconds
- 2025-09-15
  - PASS a minute
  - PASS 48 seconds
- 2025-09-16 PASS 52 seconds
- 2025-09-17 PASS 51 seconds
- 2025-09-18 PASS a minute
- 2025-09-19 PASS a minute
- 2025-09-20 PASS a minute
- 2025-09-21 PASS 45 seconds
- 2025-09-22 PASS 50 seconds
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