# stream/streamconnection/TestMigStreamRSStreamConnection_cluster Test Details
# Found 41 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 39) FAIL(x 2)
Success rate: 95.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-10 13:24](#error-2025-07-10t1324520000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams/test-acc-tf-2431478640332386884/connections | qa | flaky_500 | 63.05s
[2025-07-14 04:02](#error-2025-07-14t0402140000) |  | dev | timeout | 3600.08s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25
  - PASS 9 seconds
  - PASS 8 seconds
- 2025-06-26
  - PASS 8 seconds
  - PASS 8 seconds
- 2025-06-27 PASS 9 seconds
- 2025-06-28 PASS 10 seconds
- 2025-06-29 PASS 8 seconds
- 2025-06-30 PASS 10 seconds
- 2025-07-01
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 11 seconds
  - PASS 10 seconds
  - PASS 8 seconds
  - PASS 9 seconds
- 2025-07-02 PASS 8 seconds
- 2025-07-03 PASS 9 seconds
- 2025-07-04 PASS 8 seconds
- 2025-07-05 PASS 10 seconds
- 2025-07-06 PASS 12 seconds
- 2025-07-07 PASS 8 seconds
- 2025-07-08 PASS 8 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10
  - PASS 11 seconds
  - FAIL a minute

### Error 2025-07-10T13:24:52+00:00
```
2025-07-10T13:24:52.3331501Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-07-10T13:24:52.3339106Z === CONT  TestMigStreamRSStreamConnection_cluster
2025-07-10T13:24:52.3557877Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-07-10T13:24:52.3558487Z     resource_stream_connection_migration_test.go:17: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:24:52.3558925Z         
2025-07-10T13:24:52.3559195Z         Error: error creating resource
2025-07-10T13:24:52.3559454Z         
2025-07-10T13:24:52.3559813Z           with mongodbatlas_stream_connection.test,
2025-07-10T13:24:52.3560473Z           on terraform_plugin_test.tf line 26, in resource "mongodbatlas_stream_connection" "test":
2025-07-10T13:24:52.3561240Z           26: 		resource "mongodbatlas_stream_connection" "test" {
2025-07-10T13:24:52.3561546Z         
2025-07-10T13:24:52.3562294Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams/test-acc-tf-2431478640332386884/connections
2025-07-10T13:24:52.3563128Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:24:52.3563840Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3564236Z         BadRequestDetail: 
2025-07-10T13:24:52.3574278Z   
2025-07-10T13:24:52.3741062Z === NAME  TestMigStreamRSStreamConnection_cluster
2025-07-10T13:24:52.3741670Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:24:52.3742100Z         
2025-07-10T13:24:52.3742381Z         Error: error during resource delete
2025-07-10T13:24:52.3742662Z         
2025-07-10T13:24:52.3743350Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbb05006d8d55bb9e68f0/streams/test-acc-tf-2431478640332386884
2025-07-10T13:24:52.3744107Z         DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR")
2025-07-10T13:24:52.3744701Z         Detail: Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:24:52.3745108Z         BadRequestDetail: 
2025-07-10T13:24:52.3745417Z --- FAIL: TestMigStreamRSStreamConnection_cluster (63.49s)
```

- 2025-07-11 PASS 9 seconds
- 2025-07-12 PASS 8 seconds
- 2025-07-13 PASS 17 seconds
- 2025-07-14

### Error 2025-07-14T04:02:14+00:00
```
2025-07-14T04:02:14.0862474Z === RUN   TestMigStreamRSStreamConnection_cluster
2025-07-14T04:02:14.0863774Z     resource_stream_connection_migration_test.go:17: Creating execution cluster: test-acc-tf-c-9091606224803982985
2025-07-14T04:02:14.0864739Z 2025/07/14 01:31:29 [DEBUG] Waiting for state to become: [IDLE]
2025-07-14T04:02:14.0865388Z 2025/07/14 01:34:29 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0865991Z 2025/07/14 01:35:29 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0866681Z 2025/07/14 01:35:39 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0867292Z 2025/07/14 01:36:39 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0867875Z 2025/07/14 01:36:49 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0868463Z 2025/07/14 01:37:50 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0869057Z 2025/07/14 01:38:00 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0869638Z 2025/07/14 01:39:00 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0870229Z 2025/07/14 01:39:10 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0870811Z 2025/07/14 01:40:10 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0871392Z 2025/07/14 01:40:20 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0871979Z 2025/07/14 01:41:20 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0872570Z 2025/07/14 01:41:31 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0873586Z 2025/07/14 01:42:31 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0874193Z 2025/07/14 01:42:41 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0874811Z 2025/07/14 01:43:41 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0875398Z 2025/07/14 01:43:51 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0875976Z 2025/07/14 01:44:51 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0876571Z 2025/07/14 01:45:01 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0877158Z 2025/07/14 01:46:01 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0877747Z 2025/07/14 01:46:11 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0878326Z 2025/07/14 01:47:12 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0878909Z 2025/07/14 01:47:22 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0879491Z 2025/07/14 01:48:22 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0880075Z 2025/07/14 01:48:32 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0880663Z 2025/07/14 01:49:32 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0881257Z 2025/07/14 01:49:42 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0881832Z 2025/07/14 01:50:42 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0882409Z 2025/07/14 01:50:53 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0883159Z 2025/07/14 01:51:53 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0883929Z 2025/07/14 01:52:03 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0884515Z 2025/07/14 01:53:03 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0885098Z 2025/07/14 01:53:13 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0885688Z 2025/07/14 01:54:13 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0886278Z 2025/07/14 01:54:23 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0886858Z 2025/07/14 01:55:24 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0887448Z 2025/07/14 01:55:34 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0888039Z 2025/07/14 01:56:34 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0888620Z 2025/07/14 01:56:44 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0889208Z 2025/07/14 01:57:44 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0889794Z 2025/07/14 01:57:54 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0890377Z 2025/07/14 01:58:54 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0890973Z 2025/07/14 01:59:04 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0891555Z 2025/07/14 02:00:05 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0892140Z 2025/07/14 02:00:15 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0892718Z 2025/07/14 02:01:15 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0893459Z 2025/07/14 02:01:25 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0894056Z 2025/07/14 02:02:25 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0894635Z 2025/07/14 02:02:35 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0895225Z 2025/07/14 02:03:35 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0895809Z 2025/07/14 02:03:45 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0896390Z 2025/07/14 02:04:46 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0896965Z 2025/07/14 02:04:56 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0897556Z 2025/07/14 02:05:56 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0898158Z 2025/07/14 02:06:06 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0898745Z 2025/07/14 02:07:06 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0899326Z 2025/07/14 02:07:16 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0899913Z 2025/07/14 02:08:16 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0900492Z 2025/07/14 02:08:26 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0901067Z 2025/07/14 02:09:27 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0901667Z 2025/07/14 02:09:37 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0902422Z 2025/07/14 02:10:37 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0903166Z 2025/07/14 02:10:47 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0903763Z 2025/07/14 02:11:47 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0904356Z 2025/07/14 02:11:57 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0904941Z 2025/07/14 02:12:57 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0905527Z 2025/07/14 02:13:07 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0906112Z 2025/07/14 02:14:08 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0906698Z 2025/07/14 02:14:18 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0907277Z 2025/07/14 02:15:18 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0907861Z 2025/07/14 02:15:28 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0908443Z 2025/07/14 02:16:28 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0909050Z 2025/07/14 02:16:38 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0909642Z 2025/07/14 02:17:38 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0910221Z 2025/07/14 02:17:48 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0910814Z 2025/07/14 02:18:48 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0911402Z 2025/07/14 02:18:59 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0911981Z 2025/07/14 02:19:59 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0913008Z 2025/07/14 02:20:09 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0913607Z 2025/07/14 02:21:09 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0914195Z 2025/07/14 02:21:19 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0914785Z 2025/07/14 02:22:19 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0915364Z 2025/07/14 02:22:29 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0915940Z 2025/07/14 02:23:29 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0916531Z 2025/07/14 02:23:40 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0917119Z 2025/07/14 02:24:40 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0917711Z 2025/07/14 02:24:50 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0918295Z 2025/07/14 02:25:50 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0918885Z 2025/07/14 02:26:00 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0919462Z 2025/07/14 02:27:00 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0920047Z 2025/07/14 02:27:10 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0920634Z 2025/07/14 02:28:10 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0921212Z 2025/07/14 02:28:21 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0921788Z 2025/07/14 02:29:21 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0922371Z 2025/07/14 02:29:31 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0923108Z 2025/07/14 02:30:31 [TRACE] Waiting 10s before next try
2025-07-14T04:02:14.0923692Z 2025/07/14 02:30:41 [TRACE] Waiting 1m0s before next try
2025-07-14T04:02:14.0924322Z 2025/07/14 02:31:29 [WARN] WaitForState timeout after 1h0m0s
2025-07-14T04:02:14.0925030Z 2025/07/14 02:31:29 [WARN] WaitForState starting 30s refresh grace period
2025-07-14T04:02:14.0925829Z     resource_stream_connection_migration_test.go:17: 
2025-07-14T04:02:14.0927532Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-07-14T04:02:14.0930766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-07-14T04:02:14.0934614Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:152
2025-07-14T04:02:14.0939106Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_migration_test.go:17
2025-07-14T04:02:14.0940704Z         	Error:      	Received unexpected error:
2025-07-14T04:02:14.0942374Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T04:02:14.0943573Z         	Test:       	TestMigStreamRSStreamConnection_cluster
2025-07-14T04:02:14.0945472Z         	Messages:   	Cluster creation failed: test-acc-tf-c-9091606224803982985, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2025-07-14T04:02:14.0946761Z --- FAIL: TestMigStreamRSStreamConnection_cluster (3600.76s)
```

- 2025-07-15 PASS 9 minutes
- 2025-07-16 PASS 10 minutes
- 2025-07-17 PASS 8 minutes
- 2025-07-18 PASS 10 minutes
- 2025-07-19 PASS 10 minutes
- 2025-07-20 PASS 9 minutes
- 2025-07-21 PASS 7 minutes
- 2025-07-22 PASS 8 minutes
- 2025-07-23
  - PASS 8 minutes
  - PASS 9 minutes
- 2025-07-24 PASS 8 minutes