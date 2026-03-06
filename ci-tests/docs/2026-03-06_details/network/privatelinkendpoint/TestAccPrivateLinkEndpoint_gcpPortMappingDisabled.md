# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_gcpPortMappingDisabled Test Details
# Found 27 TestRuns in dev, qa from 2026-02-14 to 2026-03-06 from master branch: 1 unique tests, PASS(x 17) FAIL(x 10)
Success rate: 62.96%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-17 00:44](#error-2026-02-17t0044450000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6993b8803bd1e05530d2cc87/privateEndpoint/endpointService | dev | 1.03s
[2026-02-17 14:19](#error-2026-02-17t1419140000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/699475b066e203c66ac82026/privateEndpoint/endpointService | dev | 1.04s
[2026-02-18 00:51](#error-2026-02-18t0051400000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69950a278fbf682e41aaf892/privateEndpoint/endpointService | dev | 1.03s
[2026-02-21 00:44](#error-2026-02-21t0044490000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6998fe1823648dd3abd4bcb2/privateEndpoint/endpointService | dev | 1.00s
[2026-02-24 00:44](#error-2026-02-24t0044220000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/699cf2a78dfec41eaa84abec/privateEndpoint/endpointService | dev | 1.02s
[2026-02-26 00:46](#error-2026-02-26t0046100000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/699f95916ef93d0b6c1873bb/privateEndpoint/endpointService | dev | 1.03s
[2026-03-03 00:45](#error-2026-03-03t0045480000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69a62dc5caf9a091745a2b3f/privateEndpoint/endpointService | dev | 1.02s
[2026-03-04 00:48](#error-2026-03-04t0048270000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69a77edcc7d3cdfdfb6311b0/privateEndpoint/endpointService | dev | 1.03s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14 PASS 7 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 12 minutes
- 2026-02-17
  - FAIL a second

### Error 2026-02-17T00:44:45+00:00
```
2026-02-17T00:44:45.4124605Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-17T00:44:45.4127072Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-17T00:44:45.4160262Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-17T00:44:45.4160844Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-02-17T00:44:45.4161251Z         
2026-02-17T00:44:45.4163107Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6993b8803bd1e05530d2cc87/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-17T00:44:45.4164423Z         
2026-02-17T00:44:45.4164805Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-17T00:44:45.4165546Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-17T00:44:45.4166260Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-17T00:44:45.4166630Z         
2026-02-17T00:44:45.4166967Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.33s)
```

  - FAIL a second

### Error 2026-02-17T14:19:14+00:00
```
2026-02-17T14:19:14.4512154Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-17T14:19:14.4514402Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-17T14:19:14.4550886Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-17T14:19:14.4551501Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-02-17T14:19:14.4551944Z         
2026-02-17T14:19:14.4553830Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699475b066e203c66ac82026/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-17T14:19:14.4555392Z         
2026-02-17T14:19:14.4555805Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-17T14:19:14.4556573Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-17T14:19:14.4557315Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-17T14:19:14.4557701Z         
2026-02-17T14:19:14.4558635Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.45s)
```

  - PASS 8 minutes
- 2026-02-18

### Error 2026-02-18T00:51:40+00:00
```
2026-02-18T00:51:40.1103519Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-18T00:51:40.1105196Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-18T00:51:40.1119879Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-18T00:51:40.1120574Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-02-18T00:51:40.1120998Z         
2026-02-18T00:51:40.1122756Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69950a278fbf682e41aaf892/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-18T00:51:40.1124005Z         
2026-02-18T00:51:40.1124403Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-18T00:51:40.1125148Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-18T00:51:40.1126031Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-18T00:51:40.1126407Z         
2026-02-18T00:51:40.1126765Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.29s)
```

- 2026-02-19 PASS 11 minutes
- 2026-02-20 PASS 11 minutes
- 2026-02-21

### Error 2026-02-21T00:44:49+00:00
```
2026-02-21T00:44:49.1202886Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-21T00:44:49.1205596Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-21T00:44:49.1219412Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-21T00:44:49.1219987Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-02-21T00:44:49.1220397Z         
2026-02-21T00:44:49.1222238Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6998fe1823648dd3abd4bcb2/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-21T00:44:49.1223544Z         
2026-02-21T00:44:49.1223925Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-21T00:44:49.1224673Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-21T00:44:49.1225562Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-21T00:44:49.1225942Z         
2026-02-21T00:44:49.1245885Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.00s)
```

- 2026-02-22: MISSING
- 2026-02-23 PASS 9 minutes
- 2026-02-24

### Error 2026-02-24T00:44:22+00:00
```
2026-02-24T00:44:22.7141142Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-24T00:44:22.7145495Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-24T00:44:22.7159906Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-24T00:44:22.7160548Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-02-24T00:44:22.7160976Z         
2026-02-24T00:44:22.7163089Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2a78dfec41eaa84abec/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-24T00:44:22.7164387Z         
2026-02-24T00:44:22.7164817Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-24T00:44:22.7165662Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-24T00:44:22.7166427Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-24T00:44:22.7166789Z         
2026-02-24T00:44:22.7179553Z    test_working_directory=/tmp/plugintest2532814906 test_step_number=1 test_name=TestAccPrivateLinkEndpoint_basicAzure
2026-02-24T00:44:22.7207216Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.19s)
```

- 2026-02-25 PASS 10 minutes
- 2026-02-26

### Error 2026-02-26T00:46:10+00:00
```
2026-02-26T00:46:10.0152875Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-26T00:46:10.0158773Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-26T00:46:10.0253857Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-26T00:46:10.0254863Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-02-26T00:46:10.0255627Z         
2026-02-26T00:46:10.0258925Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699f95916ef93d0b6c1873bb/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-26T00:46:10.0261243Z         
2026-02-26T00:46:10.0261914Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-26T00:46:10.0263402Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-26T00:46:10.0264665Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-26T00:46:10.0265302Z         
2026-02-26T00:46:10.0266955Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.34s)
```

- 2026-02-27 PASS 13 minutes
- 2026-02-28 PASS 11 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 8 minutes
  - PASS 11 minutes
- 2026-03-03

### Error 2026-03-03T00:45:48+00:00
```
2026-03-03T00:45:48.9521668Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-03-03T00:45:48.9523736Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-03-03T00:45:48.9557481Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-03-03T00:45:48.9558068Z     resource_test.go:132: Step 1/2 error: Error running apply: exit status 1
2026-03-03T00:45:48.9558471Z         
2026-03-03T00:45:48.9560457Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a62dc5caf9a091745a2b3f/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-03-03T00:45:48.9561754Z         
2026-03-03T00:45:48.9562133Z           with mongodbatlas_privatelink_endpoint.this,
2026-03-03T00:45:48.9562871Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-03-03T00:45:48.9563578Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-03-03T00:45:48.9563941Z         
2026-03-03T00:45:48.9564695Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.25s)
```

- 2026-03-04

### Error 2026-03-04T00:48:27+00:00
```
2026-03-04T00:48:27.7721968Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-03-04T00:48:27.7726171Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-03-04T00:48:27.7747070Z   
2026-03-04T00:48:27.7764460Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-03-04T00:48:27.7765097Z     resource_test.go:132: Step 1/2 error: Error running apply: exit status 1
2026-03-04T00:48:27.7765651Z         
2026-03-04T00:48:27.7767603Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77edcc7d3cdfdfb6311b0/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-03-04T00:48:27.7769040Z         
2026-03-04T00:48:27.7769431Z           with mongodbatlas_privatelink_endpoint.this,
2026-03-04T00:48:27.7770484Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-03-04T00:48:27.7771206Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-03-04T00:48:27.7771712Z         
2026-03-04T00:48:27.7772518Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.26s)
```

- 2026-03-05 PASS 10 minutes
- 2026-03-06 PASS 11 minutes

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-02-15 00:53](#error-2026-02-15t0053390000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/6991161dcef188b1a5720703/privateEndpoint/endpointService | qa | 1.03s
[2026-02-22 00:51](#error-2026-02-22t0051240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/699a501662519b89146809c8/privateEndpoint/endpointService | qa | 1.03s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15

### Error 2026-02-15T00:53:39+00:00
```
2026-02-15T00:53:39.9469916Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-15T00:53:39.9471992Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-15T00:53:39.9487749Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-15T00:53:39.9488359Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-02-15T00:53:39.9488780Z         
2026-02-15T00:53:39.9490646Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/6991161dcef188b1a5720703/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-15T00:53:39.9491961Z         
2026-02-15T00:53:39.9492352Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-15T00:53:39.9493232Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-15T00:53:39.9493947Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-15T00:53:39.9494312Z         
2026-02-15T00:53:39.9506689Z    test_terraform_path=/home/runner/work/_temp/155f34f0-edca-429b-aefa-f3b6f492955e/terraform
2026-02-15T00:53:39.9514242Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.27s)
```

- 2026-02-16: MISSING
- 2026-02-17
  - PASS 11 minutes
  - PASS 8 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22

### Error 2026-02-22T00:51:24+00:00
```
2026-02-22T00:51:24.7932307Z === RUN   TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-22T00:51:24.7934821Z === CONT  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-22T00:51:24.7948566Z === NAME  TestAccPrivateLinkEndpoint_gcpPortMappingDisabled
2026-02-22T00:51:24.7949444Z     resource_test.go:129: Step 1/2 error: Error running apply: exit status 1
2026-02-22T00:51:24.7950183Z         
2026-02-22T00:51:24.7953564Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-qa.mongodb.com/api/atlas/v2/groups/699a501662519b89146809c8/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-22T00:51:24.7954907Z         
2026-02-22T00:51:24.7955319Z           with mongodbatlas_privatelink_endpoint.this,
2026-02-22T00:51:24.7956054Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-02-22T00:51:24.7956749Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-02-22T00:51:24.7957112Z         
2026-02-22T00:51:24.7976777Z --- FAIL: TestAccPrivateLinkEndpoint_gcpPortMappingDisabled (1.29s)
```

- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 14 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 12 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
