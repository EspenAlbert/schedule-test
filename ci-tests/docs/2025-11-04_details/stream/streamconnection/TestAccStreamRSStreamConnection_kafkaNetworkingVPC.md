# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 31 TestRuns in dev, qa from 2025-10-06 to 2025-11-04 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-07 03:28](#error-2025-10-07t0328020000) |  | dev | timeout | 3720.09s
[2025-10-09 02:51](#error-2025-10-09t0251320000) |  | dev | timeout | 3963.05s
[2025-10-12 02:46](#error-2025-10-12t0246540000) |  | qa | timeout | 3925.03s
[2025-10-13 01:00](#error-2025-10-13t0100440000) |  | dev |  | 423.06s
[2025-10-19 00:50](#error-2025-10-19t0050120000) | STREAM_TENANT_NOT_FOUND_FOR_NAME /api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections | qa |  | 173.04s

## Timeline
- 2025-10-05: MISSING
- 2025-10-06 PASS 3 minutes
- 2025-10-07

### Error 2025-10-07T03:28:02+00:00
```
2025-10-07T03:28:02.2671671Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-07T03:28:02.2674269Z   diagnostic_summary=
2025-10-07T03:28:02.2677101Z   
2025-10-07T03:28:02.2685518Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-10-07T03:28:02.2685997Z         
2025-10-07T03:28:02.2687045Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-07T03:28:02.2688554Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-07T03:28:02.2689193Z         
2025-10-07T03:28:02.2689589Z           with mongodbatlas_network_peering.test,
2025-10-07T03:28:02.2690290Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-07T03:28:02.2690929Z           19: 	resource "mongodbatlas_network_peering" "test" {
2025-10-07T03:28:02.2691296Z         
2025-10-07T03:28:02.2691674Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (3720.95s)
```

- 2025-10-08 PASS 3 minutes
- 2025-10-09

### Error 2025-10-09T02:51:32+00:00
```
2025-10-09T02:51:32.9773312Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-09T02:51:32.9781914Z    test_step_number=2 test_terraform_path=/home/runner/work/_temp/70f4e407-f560-4485-8817-a3a7d8a4a0bd/terraform test_working_directory=/tmp/plugintest3763606329 test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-09T02:51:32.9783562Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-09T02:51:32.9784609Z         
2025-10-09T02:51:32.9786298Z         Error: error deleting MongoDB Network Peering Connection (68e7055ec2a3cd169306b69a): timeout while waiting for state to become 'DELETED' (last state: 'TERMINATING', timeout: 1h0m0s)
2025-10-09T02:51:32.9787068Z         
2025-10-09T02:51:32.9787430Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (3963.47s)
```

- 2025-10-10 PASS 3 minutes
- 2025-10-11 PASS 3 minutes
- 2025-10-12

### Error 2025-10-12T02:46:54+00:00
```
2025-10-12T02:46:54.3427388Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-12T02:46:54.3430169Z   diagnostic_summary=
2025-10-12T02:46:54.3433249Z    diagnostic_detail=""
2025-10-12T02:46:54.3440487Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/70fb9e8d-1575-45bc-ad16-1e16fa65f090/terraform test_working_directory=/tmp/plugintest2696289155 test_step_number=1
2025-10-12T02:46:54.3442125Z     resource_stream_connection_test.go:122: Step 1/2 error: Error running apply: exit status 1
2025-10-12T02:46:54.3442577Z         
2025-10-12T02:46:54.3443817Z         Error: error creating MongoDB Network Peering Connection: timeout while waiting for state to become 'FAILED, AVAILABLE, PENDING_ACCEPTANCE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-12T02:46:54.3445512Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-12T02:46:54.3446268Z         
2025-10-12T02:46:54.3446621Z           with mongodbatlas_network_peering.test,
2025-10-12T02:46:54.3447399Z           on terraform_plugin_test.tf line 19, in resource "mongodbatlas_network_peering" "test":
2025-10-12T02:46:54.3448309Z           19: 	resource "mongodbatlas_network_peering" "test" {
2025-10-12T02:46:54.3448747Z         
2025-10-12T02:46:54.3457510Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-12T02:46:54.3457953Z         
2025-10-12T02:46:54.3458658Z         Error: error deleting MongoDB Network Peering Container (68eafcff454e3b49aeac7863): couldn't find resource (21 retries)
2025-10-12T02:46:54.3459347Z         
2025-10-12T02:46:54.3459698Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (3925.29s)
```

- 2025-10-13

### Error 2025-10-13T01:00:44+00:00
```
2025-10-13T01:00:44.5419364Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-13T01:00:44.5427001Z    test_working_directory=/tmp/plugintest3683325803
2025-10-13T01:00:44.5427789Z     resource_stream_connection_test.go:122: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-13T01:00:44.5428538Z         
2025-10-13T01:00:44.5428867Z         Error: error deleting resource
2025-10-13T01:00:44.5429340Z         
2025-10-13T01:00:44.5429887Z         (504 Gateway Timeout) failed to decode response body: undefined response type
2025-10-13T01:00:44.5430428Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (423.65s)
```

- 2025-10-14 PASS 3 minutes
- 2025-10-15 PASS 4 minutes
- 2025-10-16 PASS 3 minutes
- 2025-10-17 PASS 3 minutes
- 2025-10-18 PASS 3 minutes
- 2025-10-19

### Error 2025-10-19T00:50:12+00:00
```
2025-10-19T00:50:12.1447796Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2025-10-19T00:50:12.1463470Z    test_terraform_path=/home/runner/work/_temp/900806b3-a17f-4fd8-9610-14d4dc9797f0/terraform
2025-10-19T00:50:12.1464288Z     resource_stream_connection_test.go:225: Step 1/2 error: Error running apply: exit status 1
2025-10-19T00:50:12.1464713Z         
2025-10-19T00:50:12.1465107Z         Error: error creating resource
2025-10-19T00:50:12.1465388Z         
2025-10-19T00:50:12.1465728Z           with mongodbatlas_stream_connection.test,
2025-10-19T00:50:12.1466477Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2025-10-19T00:50:12.1467349Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2025-10-19T00:50:12.1467672Z         
2025-10-19T00:50:12.1468442Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68f43174353f113dafd15147/streams/test-acc-tf-s-3100645711005476142/connections
2025-10-19T00:50:12.1469402Z         POST: HTTP 404 Not Found (Error code: "STREAM_TENANT_NOT_FOUND_FOR_NAME")
2025-10-19T00:50:12.1469992Z         Detail: Stream instance for project 68f43174353f113dafd15147 and name
2025-10-19T00:50:12.1470606Z         test-acc-tf-s-3100645711005476142 not found. Reason: Not Found. Params:
2025-10-19T00:50:12.1471170Z         [68f43174353f113dafd15147 test-acc-tf-s-3100645711005476142],
2025-10-19T00:50:12.1471558Z         BadRequestDetail: 
2025-10-19T00:50:12.1471928Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (173.37s)
```

- 2025-10-20
  - PASS 5 minutes
  - PASS 3 minutes
- 2025-10-21 PASS 4 minutes
- 2025-10-22
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-10-23 PASS 3 minutes
- 2025-10-24 PASS 3 minutes
- 2025-10-25 PASS 3 minutes
- 2025-10-26 PASS 3 minutes
- 2025-10-27 PASS an hour
- 2025-10-28 PASS 3 minutes
- 2025-10-29 PASS 3 minutes
- 2025-10-30 PASS 3 minutes
- 2025-10-31 PASS 3 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 2 minutes
- 2025-11-03 PASS 3 minutes
- 2025-11-04 PASS 3 minutes