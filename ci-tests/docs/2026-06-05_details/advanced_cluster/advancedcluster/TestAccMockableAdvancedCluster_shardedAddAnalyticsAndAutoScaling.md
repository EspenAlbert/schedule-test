# advanced_cluster/advancedcluster/TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 7)
Success rate: 76.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-15 00:57](#error-2026-05-15t0057190000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a066f6b649b96da6ebb1b44/clusters | dev | flaky_500 | 7.01s
[2026-05-16 00:59](#error-2026-05-16t0059440000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a07c17e8f63c00f867e69fa/clusters | dev | flaky_500 | 6.02s
[2026-05-18 01:00](#error-2026-05-18t0100460000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a0a64ba6fb087b449da8562/clusters | dev | flaky_500 | 7.01s
[2026-05-19 01:08](#error-2026-05-19t0108180000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a0bb7fe04055db6de69f16e/clusters | dev | flaky_500 | 6.01s
[2026-05-20 01:03](#error-2026-05-20t0103250000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a0d085b55959eec416dae38/clusters | dev | flaky_500 | 7.00s
[2026-05-21 01:09](#error-2026-05-21t0109200000) | INVALID_ATTRIBUTE /api/atlas/v2/groups/6a0e5b3d29c1c445d41a2111/clusters | dev | flaky_500 | 5.07s
[2026-05-28 01:02](#error-2026-05-28t0102470000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS an hour
- 2026-05-08 PASS 41 minutes
- 2026-05-09 PASS 31 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 35 minutes
- 2026-05-12 PASS 31 minutes
- 2026-05-13 PASS 37 minutes
- 2026-05-14 PASS an hour
- 2026-05-15

### Error 2026-05-15T00:57:19+00:00
```
2026-05-15T00:57:19.1623925Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-15T00:57:19.2568936Z     resource_test.go:1036: Adding variable clusterName=test-acc-tf-c-5006189642069884567
2026-05-15T00:57:19.2570131Z     resource_test.go:1036: Adding variable groupId=6a066f6b649b96da6ebb1b44
2026-05-15T00:58:38.0396180Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-15T00:58:43.9185431Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-15T00:58:43.9186822Z     resource_test.go:1036: Step 1/4 error: Error running apply: exit status 1
2026-05-15T00:58:43.9187590Z         
2026-05-15T00:58:43.9188126Z         Error: Error in create
2026-05-15T00:58:43.9188759Z         
2026-05-15T00:58:43.9189433Z           with mongodbatlas_advanced_cluster.test,
2026-05-15T00:58:43.9190696Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-15T00:58:43.9191893Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-05-15T00:58:43.9192574Z         
2026-05-15T00:58:43.9193360Z         cluster name: test-acc-tf-c-5006189642069884567, API error details:
2026-05-15T00:58:43.9194606Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a066f6b649b96da6ebb1b44/clusters
2026-05-15T00:58:43.9199988Z         POST: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-05-15T00:58:43.9201231Z         attribute Disk IOPS. Configured IOPS must be below the maximum of 500 for
2026-05-15T00:58:43.9203646Z         instance size M30. specified. Reason: Bad Request. Params: [Disk IOPS.
2026-05-15T00:58:43.9204836Z         Configured IOPS must be below the maximum of 500 for instance size M30.],
2026-05-15T00:58:43.9206151Z         BadRequestDetail: 
2026-05-15T00:58:44.0075767Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (7.13s)
```

- 2026-05-16

### Error 2026-05-16T00:59:44+00:00
```
2026-05-16T00:59:44.6788818Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-16T00:59:44.7780102Z     resource_test.go:1036: Adding variable groupId=6a07c17e8f63c00f867e69fa
2026-05-16T00:59:44.7781324Z     resource_test.go:1036: Adding variable clusterName=test-acc-tf-c-6025519458137754352
2026-05-16T01:01:46.7653105Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-16T01:01:52.3197171Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-16T01:01:52.3198554Z     resource_test.go:1036: Step 1/4 error: Error running apply: exit status 1
2026-05-16T01:01:52.3199240Z         
2026-05-16T01:01:52.3199705Z         Error: Error in create
2026-05-16T01:01:52.3200134Z         
2026-05-16T01:01:52.3200743Z           with mongodbatlas_advanced_cluster.test,
2026-05-16T01:01:52.3202014Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-16T01:01:52.3203180Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-05-16T01:01:52.3203849Z         
2026-05-16T01:01:52.3204687Z         cluster name: test-acc-tf-c-6025519458137754352, API error details:
2026-05-16T01:01:52.3205978Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a07c17e8f63c00f867e69fa/clusters
2026-05-16T01:01:52.3207235Z         POST: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-05-16T01:01:52.3208678Z         attribute Disk IOPS. Configured IOPS must be below the maximum of 500 for
2026-05-16T01:01:52.3209905Z         instance size M30. specified. Reason: Bad Request. Params: [Disk IOPS.
2026-05-16T01:01:52.3211401Z         Configured IOPS must be below the maximum of 500 for instance size M30.],
2026-05-16T01:01:52.3212249Z         BadRequestDetail: 
2026-05-16T01:01:52.3813188Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (6.16s)
```

- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T01:00:46+00:00
```
2026-05-18T01:00:46.4628058Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-18T01:00:46.5590703Z     resource_test.go:1036: Adding variable clusterName=test-acc-tf-c-3702082327710230905
2026-05-18T01:00:46.5591456Z     resource_test.go:1036: Adding variable groupId=6a0a64ba6fb087b449da8562
2026-05-18T01:02:21.6909230Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-18T01:02:28.4316521Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-18T01:02:28.4317370Z     resource_test.go:1036: Step 1/4 error: Error running apply: exit status 1
2026-05-18T01:02:28.4317885Z         
2026-05-18T01:02:28.4318160Z         Error: Error in create
2026-05-18T01:02:28.4318488Z         
2026-05-18T01:02:28.4318888Z           with mongodbatlas_advanced_cluster.test,
2026-05-18T01:02:28.4319705Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-18T01:02:28.4320455Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-05-18T01:02:28.4320786Z         
2026-05-18T01:02:28.4321328Z         cluster name: test-acc-tf-c-3702082327710230905, API error details:
2026-05-18T01:02:28.4322236Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0a64ba6fb087b449da8562/clusters
2026-05-18T01:02:28.4323335Z         POST: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-05-18T01:02:28.4324020Z         attribute Disk IOPS. Configured IOPS must be below the maximum of 500 for
2026-05-18T01:02:28.4324659Z         instance size M30. specified. Reason: Bad Request. Params: [Disk IOPS.
2026-05-18T01:02:28.4325283Z         Configured IOPS must be below the maximum of 500 for instance size M30.],
2026-05-18T01:02:28.4325714Z         BadRequestDetail: 
2026-05-18T01:02:28.4807859Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (7.12s)
```

- 2026-05-19

### Error 2026-05-19T01:08:18+00:00
```
2026-05-19T01:08:18.0139973Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-19T01:08:18.1118547Z     resource_test.go:1036: Adding variable groupId=6a0bb7fe04055db6de69f16e
2026-05-19T01:08:18.1119380Z     resource_test.go:1036: Adding variable clusterName=test-acc-tf-c-8017696702997851654
2026-05-19T01:09:38.0147931Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-19T01:09:43.6282730Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-19T01:09:43.6283945Z     resource_test.go:1036: Step 1/4 error: Error running apply: exit status 1
2026-05-19T01:09:43.6284656Z         
2026-05-19T01:09:43.6285098Z         Error: Error in create
2026-05-19T01:09:43.6285510Z         
2026-05-19T01:09:43.6286054Z           with mongodbatlas_advanced_cluster.test,
2026-05-19T01:09:43.6287228Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-19T01:09:43.6288299Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-05-19T01:09:43.6288816Z         
2026-05-19T01:09:43.6289555Z         cluster name: test-acc-tf-c-8017696702997851654, API error details:
2026-05-19T01:09:43.6290854Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0bb7fe04055db6de69f16e/clusters
2026-05-19T01:09:43.6292056Z         POST: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-05-19T01:09:43.6294026Z         attribute Disk IOPS. Configured IOPS must be below the maximum of 500 for
2026-05-19T01:09:43.6295181Z         instance size M30. specified. Reason: Bad Request. Params: [Disk IOPS.
2026-05-19T01:09:43.6296309Z         Configured IOPS must be below the maximum of 500 for instance size M30.],
2026-05-19T01:09:43.6297048Z         BadRequestDetail: 
2026-05-19T01:09:43.6961234Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (6.13s)
```

- 2026-05-20

### Error 2026-05-20T01:03:25+00:00
```
2026-05-20T01:03:25.2205613Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-20T01:03:25.3163590Z     resource_test.go:1036: Adding variable groupId=6a0d085b55959eec416dae38
2026-05-20T01:03:25.3164771Z     resource_test.go:1036: Adding variable clusterName=test-acc-tf-c-8843911832735186374
2026-05-20T01:04:50.8594806Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-20T01:04:57.4149491Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-20T01:04:57.4150630Z     resource_test.go:1036: Step 1/4 error: Error running apply: exit status 1
2026-05-20T01:04:57.4151178Z         
2026-05-20T01:04:57.4151532Z         Error: Error in create
2026-05-20T01:04:57.4151902Z         
2026-05-20T01:04:57.4152449Z           with mongodbatlas_advanced_cluster.test,
2026-05-20T01:04:57.4153570Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-20T01:04:57.4154663Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-05-20T01:04:57.4155226Z         
2026-05-20T01:04:57.4155923Z         cluster name: test-acc-tf-c-8843911832735186374, API error details:
2026-05-20T01:04:57.4157252Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0d085b55959eec416dae38/clusters
2026-05-20T01:04:57.4158382Z         POST: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-05-20T01:04:57.4159470Z         attribute Disk IOPS. Configured IOPS must be below the maximum of 500 for
2026-05-20T01:04:57.4160561Z         instance size M30. specified. Reason: Bad Request. Params: [Disk IOPS.
2026-05-20T01:04:57.4161665Z         Configured IOPS must be below the maximum of 500 for instance size M30.],
2026-05-20T01:04:57.4162425Z         BadRequestDetail: 
2026-05-20T01:04:57.4755795Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (7.04s)
```

- 2026-05-21

### Error 2026-05-21T01:09:20+00:00
```
2026-05-21T01:09:20.4526809Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-21T01:09:20.5442707Z     resource_test.go:1036: Adding variable clusterName=test-acc-tf-c-2709477409769618491
2026-05-21T01:09:20.5443857Z     resource_test.go:1036: Adding variable groupId=6a0e5b3d29c1c445d41a2111
2026-05-21T01:13:44.4229003Z === CONT  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-21T01:13:49.3485765Z === NAME  TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-21T01:13:49.3487228Z     resource_test.go:1036: Step 1/4 error: Error running apply: exit status 1
2026-05-21T01:13:49.3487905Z         
2026-05-21T01:13:49.3488335Z         Error: Error in create
2026-05-21T01:13:49.3488755Z         
2026-05-21T01:13:49.3489350Z           with mongodbatlas_advanced_cluster.test,
2026-05-21T01:13:49.3490581Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-05-21T01:13:49.3491755Z           12: 	resource "mongodbatlas_advanced_cluster" "test" {
2026-05-21T01:13:49.3492336Z         
2026-05-21T01:13:49.3493103Z         cluster name: test-acc-tf-c-2709477409769618491, API error details:
2026-05-21T01:13:49.3494369Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a0e5b3d29c1c445d41a2111/clusters
2026-05-21T01:13:49.3495875Z         POST: HTTP 400 Bad Request (Error code: "INVALID_ATTRIBUTE") Detail: Invalid
2026-05-21T01:13:49.3497040Z         attribute Disk IOPS. Configured IOPS must be below the maximum of 500 for
2026-05-21T01:13:49.3498167Z         instance size M30. specified. Reason: Bad Request. Params: [Disk IOPS.
2026-05-21T01:13:49.3499296Z         Configured IOPS must be below the maximum of 500 for instance size M30.],
2026-05-21T01:13:49.3500351Z         BadRequestDetail: 
2026-05-21T01:13:49.4067941Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (5.74s)
```

- 2026-05-22 PASS an hour
- 2026-05-23 PASS 43 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 39 minutes
- 2026-05-26 PASS 29 minutes
- 2026-05-27 PASS an hour
- 2026-05-28

### Error 2026-05-28T01:02:47+00:00
```
2026-05-28T01:02:47.2039268Z === RUN   TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-28T01:02:47.6031148Z     shared_resource.go:160: 
2026-05-28T01:02:47.6032537Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:02:47.6034388Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-05-28T01:02:47.6036184Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-05-28T01:02:47.6038274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-05-28T01:02:47.6040087Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-05-28T01:02:47.6042010Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_test.go:1011
2026-05-28T01:02:47.6042845Z         	Error:      	Received unexpected error:
2026-05-28T01:02:47.6045700Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:47.6047242Z         	Test:       	TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling
2026-05-28T01:02:47.6049844Z         	Messages:   	Project creation failed: test-acc-tf-p-5329881828889176497, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:02:47.6051478Z --- FAIL: TestAccMockableAdvancedCluster_shardedAddAnalyticsAndAutoScaling (0.40s)
```

- 2026-05-29 PASS 34 minutes
- 2026-05-30 PASS 24 minutes
- 2026-05-31: MISSING
- 2026-06-01 PASS an hour
- 2026-06-02 PASS 23 minutes
- 2026-06-03 PASS 53 minutes
- 2026-06-04 PASS an hour
- 2026-06-05 PASS 38 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 32 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 30 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 32 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 27 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
