# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_withPrivateEndpoint Test Details
# Found 33 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-16 01:06](#error-2026-09-16t0106250000) |  | dev | 350.05s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 7 minutes
- 2026-09-03 PASS 6 minutes
- 2026-09-04 PASS 7 minutes
- 2026-09-05 PASS 6 minutes
- 2026-09-06: MISSING
- 2026-09-07 PASS 6 minutes
- 2026-09-08 PASS 6 minutes
- 2026-09-09 PASS 6 minutes
- 2026-09-10 PASS 7 minutes
- 2026-09-11 PASS 6 minutes
- 2026-09-12 PASS 7 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 7 minutes
- 2026-09-15 PASS 6 minutes
- 2026-09-16

### Error 2026-09-16T01:06:25+00:00
```
2026-09-16T01:06:25.4494747Z === RUN   TestAccFederatedDatabaseInstance_withPrivateEndpoint
2026-09-16T01:06:25.4537533Z   
2026-09-16T01:06:25.4539043Z     resource_federated_database_instance_test.go:196: Step 2/2 error running refresh: After refreshing state during this test step, a followup plan was not empty.
2026-09-16T01:06:25.4540346Z         stdout:
2026-09-16T01:06:25.4540744Z         
2026-09-16T01:06:25.4542013Z         Terraform used the selected providers to generate the following execution
2026-09-16T01:06:25.4543417Z         plan. Resource actions are indicated with the following symbols:
2026-09-16T01:06:25.4544173Z           + create
2026-09-16T01:06:25.4544793Z         -/+ destroy and then create replacement
2026-09-16T01:06:25.4545357Z         
2026-09-16T01:06:25.4545997Z         Terraform will perform the following actions:
2026-09-16T01:06:25.4546578Z         
2026-09-16T01:06:25.4547204Z           # aws_vpc_endpoint.test will be created
2026-09-16T01:06:25.4548002Z           + resource "aws_vpc_endpoint" "test" {
2026-09-16T01:06:25.4548937Z               + arn                   = (known after apply)
2026-09-16T01:06:25.4549898Z               + cidr_blocks           = (known after apply)
2026-09-16T01:06:25.4551032Z               + dns_entry             = (known after apply)
2026-09-16T01:06:25.4551999Z               + id                    = (known after apply)
2026-09-16T01:06:25.4553145Z               + ip_address_type       = (known after apply)
2026-09-16T01:06:25.4554132Z               + network_interface_ids = (known after apply)
2026-09-16T01:06:25.4555099Z               + owner_id              = (known after apply)
2026-09-16T01:06:25.4556060Z               + policy                = (known after apply)
2026-09-16T01:06:25.4557015Z               + prefix_list_id        = (known after apply)
2026-09-16T01:06:25.4557855Z               + private_dns_enabled   = false
2026-09-16T01:06:25.4558783Z               + requester_managed     = (known after apply)
2026-09-16T01:06:25.4559748Z               + route_table_ids       = (known after apply)
2026-09-16T01:06:25.4560556Z               + security_group_ids    = [
2026-09-16T01:06:25.4561368Z                   + "sg-08aad761d3236c099",
2026-09-16T01:06:25.4561950Z                 ]
2026-09-16T01:06:25.4563403Z               + service_name          = "com.amazonaws.vpce.us-east-1.vpce-svc-0a7247db33497082e"
2026-09-16T01:06:25.4564603Z               + state                 = (known after apply)
2026-09-16T01:06:25.4565400Z               + subnet_ids            = [
2026-09-16T01:06:25.4566257Z                   + "subnet-0350d047363b537e1",
2026-09-16T01:06:25.4566854Z                 ]
2026-09-16T01:06:25.4567642Z               + tags_all              = (known after apply)
2026-09-16T01:06:25.4568532Z               + vpc_endpoint_type     = "Interface"
2026-09-16T01:06:25.4569515Z               + vpc_id                = "vpc-08a29ef0b7a148902"
2026-09-16T01:06:25.4570099Z         
2026-09-16T01:06:25.4570769Z               + dns_options (known after apply)
2026-09-16T01:06:25.4571340Z             }
2026-09-16T01:06:25.4571721Z         
2026-09-16T01:06:25.4573178Z           # mongodbatlas_privatelink_endpoint_service_data_federation_online_archive.test must be replaced
2026-09-16T01:06:25.4574885Z         -/+ resource "mongodbatlas_privatelink_endpoint_service_data_federation_online_archive" "test" {
2026-09-16T01:06:25.4577744Z               ~ customer_endpoint_dns_name = "vpce-05625a72db822def4-iywtwugy.vpce-svc-0a7247db33497082e.us-east-1.vpce.amazonaws.com" -> (known after apply) # forces replacement
2026-09-16T01:06:25.4580342Z               ~ endpoint_id                = "vpce-05625a72db822def4" -> (known after apply) # forces replacement
2026-09-16T01:06:25.4583077Z               ~ id                         = "ZW5kcG9pbnRfaWQ=:dnBjZS0wNTYyNWE3MmRiODIyZGVmNA==-cHJvamVjdF9pZA==:NmFhOWU1Y2FiYjA3Y2Y0ODkzNWUzYjZl" -> (known after apply)
2026-09-16T01:06:25.4584873Z               ~ type                       = "DATA_LAKE" -> (known after apply)
2026-09-16T01:06:25.4585854Z                 # (5 unchanged attributes hidden)
2026-09-16T01:06:25.4586434Z             }
2026-09-16T01:06:25.4586827Z         
2026-09-16T01:06:25.4587428Z         Plan: 2 to add, 0 to change, 1 to destroy.
2026-09-16T01:06:25.4588252Z --- FAIL: TestAccFederatedDatabaseInstance_withPrivateEndpoint (350.50s)
```

- 2026-09-17 PASS 7 minutes
- 2026-09-18 PASS 7 minutes
- 2026-09-19 PASS 7 minutes
- 2026-09-20: MISSING
- 2026-09-21 PASS 6 minutes
- 2026-09-22 PASS 6 minutes
- 2026-09-23 PASS 6 minutes
- 2026-09-24 PASS 6 minutes
- 2026-09-25 PASS 7 minutes
- 2026-09-26 PASS 6 minutes
- 2026-09-27: MISSING
- 2026-09-28 PASS 6 minutes
- 2026-09-29 PASS 9 minutes
- 2026-09-30 PASS 7 minutes
- 2026-10-01 PASS 6 minutes
- 2026-10-02 PASS 7 minutes

## QA Environment
### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 6 minutes
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 6 minutes
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 6 minutes
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 6 minutes
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27 PASS 6 minutes
- 2026-09-28: MISSING
- 2026-09-29 PASS 6 minutes
- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
